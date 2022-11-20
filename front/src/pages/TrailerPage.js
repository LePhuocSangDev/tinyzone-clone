import React, { useEffect, useState } from "react";
import SocialIcons from "../components/SocialIcons";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BsCameraVideoFill, BsFillPlayFill } from "react-icons/bs";
import axios from "../axios";
import MovieCards from "../components/MovieCards";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToLikeList, selectUser } from "../features/userSlice";

const TrailerPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const mediaType = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const fetchData = async () => {
    const request = await axios.get(
      `/${mediaType}/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    return request.data;
  };
  const fetchSimilar = async () => {
    const request = await axios.get(
      `/${mediaType}/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    );
    return request.data.results;
  };
  const fetchTrailer = async () => {
    const request = await axios.get(
      `/${mediaType}/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    return request.data.results;
  };
  const { data: movie, isLoading } = useQuery(["movieDetails"], fetchData);
  console.log(movie);
  const { data: similarMovies } = useQuery(["similarMovies"], fetchSimilar);
  const { data: trailer } = useQuery(["trailer"], fetchTrailer);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-4 flex flex-col gap-4">
          <p className="flex gap-4 text-sm">
            <Link to="/home" className="text-white">
              Home
            </Link>
            /<span className="text-white">Movie</span>/
            <span className="text-white">
              {movie?.original_title || movie?.name}
            </span>
          </p>
          <div className="h-[400px] lg:h-[500px]">
            <iframe
              id="iframe-embed"
              title="trailer"
              width="100%"
              height="100%"
              scrolling="no"
              frameBorder="0"
              src={`https://www.youtube.com/embed/${
                trailer?.length > 0
                  ? trailer[0]?.key || trailer[1]?.key
                  : "Or8NmkkqyZI"
              }`}
              allowFullScreen="allowfullscreen"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
          {/* for mobile */}
          <div className="flex-1 flex gap-2 flex-col lg:hidden">
            <a
              href={`https://2embed.org/embed/movie?tmdb=${id}`}
              className="w-full px-2 py-2 block text-white rounded-sm text-center bg-[#9b1a29]"
            >
              Watch Now
            </a>
            <button
              onClick={() => dispatch(addToLikeList(movie))}
              className="w-full px-2 py-2 rounded-sm text-center bg-white"
            >
              + Add favorite
            </button>
          </div>
          {/* for mobile */}
          <div>
            <div className="flex gap-4 border-b-4 border-b-[#333] pb-6">
              <div className="flex-1  lg:flex-col gap-8 hidden lg:block ">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${
                    movie?.backdrop_path || movie?.poster_path
                  }`}
                  alt=""
                  className="h-auto"
                />
                <div className="py-4">
                  <p>
                    <span className="font-bold text-md text-white">9.2</span>{" "}
                    <span className="text-[#aaa] text-sm">/ 29 voted</span>
                  </p>
                  <div className="relative h-[5px] rounded-md bg-[#333]">
                    <div className="absolute h-[5px] w-[92%] bg-[#28a745]"></div>
                  </div>
                </div>

                <div className="flex gap-2 justify-evenly mt-2">
                  <button className="flex gap-2 rounded-md px-4 py-1 bg-white border items-center ">
                    <AiOutlineLike
                      style={{ color: "green" }}
                      className="text-green"
                    />{" "}
                    Like
                  </button>
                  <button className="flex gap-2 rounded-md px-4 py-1 bg-white border items-center ">
                    <AiOutlineDislike style={{ color: "red" }} /> DisLike
                  </button>
                </div>
              </div>
              <div className="flex-5 flex gap-8 flex-col text-white">
                <h4 className="text-3xl text-white">
                  {movie?.original_title || movie?.name}
                </h4>
                <div className="flex gap-2">
                  <button className="flex gap-1 items-center p-1 rounded-sm text-black bg-white">
                    <BsCameraVideoFill /> Trailer
                  </button>
                  <button className="p-1 rounded-sm text-black bg-white font-bold">
                    HD
                  </button>
                  <button className="p-1 rounded-sm text-black bg-[#ffc107]">
                    {movie?.vote_average.toFixed(1)}
                  </button>
                </div>
                <p className="text-sm">{movie?.overview}</p>
                <div className="flex flex-col lg:flex-row">
                  <div className="flex-1">
                    <p className="font-bold">
                      {movie?.release_date ? "Release:" : "Number of seasons:"}{" "}
                      <span className="font-thin">
                        {movie?.release_date || movie?.number_of_seasons}
                      </span>
                    </p>
                    <p className="font-bold flex gap-2">
                      Genre:{" "}
                      {movie?.genres.map((genre) => (
                        <span key={genre.name} className="font-thin">
                          {genre.name}
                        </span>
                      ))}
                    </p>
                    <p className="font-bold">
                      {movie?.runtime ? "Runtime:" : "Number of episodes:"}{" "}
                      <span className="font-thin">
                        {movie?.runtime
                          ? movie?.runtime + " minutes"
                          : movie?.number_of_episodes + " episodes"}
                      </span>
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">
                      Popularity:{" "}
                      <span className="font-thin">{movie?.popularity}</span>
                    </p>
                    <p className="font-bold">
                      Language:{" "}
                      <span className="font-thin">
                        {movie?.spoken_languages[0]?.english_name}
                      </span>
                    </p>
                    <p className="font-bold">
                      Production Company:{" "}
                      <span className="font-thin">
                        {movie.production_companies[0]?.name}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 hidden lg:flex gap-2 flex-col ">
                <a
                  href={`https://2embed.org/embed/movie?tmdb=${id}`}
                  target="blank"
                  className="w-full px-2 py-2 block text-white rounded-sm text-center bg-[#9b1a29]"
                >
                  Watch Now
                </a>
                <button className="w-full px-2 py-2 rounded-sm text-center bg-white">
                  + Add favorite
                </button>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap pt-4">
              <a href="/" className="block p-1 bg-white rounded-md">
                Watch {movie.title} Online free
              </a>
              <a href="/" className="block p-1 bg-white rounded-md">
                {movie.title} Online free
              </a>
              <a href="/" className="block p-1 bg-white rounded-md">
                where to watch {movie.title}
              </a>
              <a href="/" className="block p-1 bg-white rounded-md">
                {movie.title} movie online free
              </a>
              <a href="/" className="block p-1 bg-white rounded-md">
                {movie.title} free online{" "}
              </a>
            </div>
            <SocialIcons />
            <div className="py-4 px-8 flex flex-col gap-2 bg-[rgba(255,255,255,.05)]  rounded-md">
              <p className="text-center text-white">
                If current server doesn't work please try other servers below.
              </p>
              <div className="  gap-4 flex justify-evenly flex-wrap">
                <div className="rounded-md p-2 bg-[rgba(255,255,255,.05)] flex gap-2 items-center">
                  <i>
                    <BsFillPlayFill
                      style={{ color: "white", fontSize: "24px" }}
                    />
                  </i>
                  <div>
                    <p className="text-[#ccc]">Sever</p>
                    <p className="text-white">Vidcloud</p>
                  </div>
                </div>
                <div className="rounded-md p-2 bg-[rgba(255,255,255,.05)] flex gap-2 items-center">
                  <i>
                    <BsFillPlayFill
                      style={{ color: "white", fontSize: "24px" }}
                    />
                  </i>
                  <div>
                    <p className="text-[#ccc]">Sever</p>
                    <p className="text-white">Vidcloud</p>
                  </div>
                </div>
                <div className="rounded-md p-2 bg-[rgba(255,255,255,.05)] flex gap-2 items-center">
                  <i>
                    <BsFillPlayFill
                      style={{ color: "white", fontSize: "24px" }}
                    />
                  </i>
                  <div>
                    <p className="text-[#ccc]">Sever</p>
                    <p className="text-white">Vidcloud</p>
                  </div>
                </div>
                <div className="rounded-md p-2 bg-[rgba(255,255,255,.05)] flex gap-2 items-center">
                  <i>
                    <BsFillPlayFill
                      style={{ color: "white", fontSize: "24px" }}
                    />
                  </i>
                  <div>
                    <p className="text-[#ccc]">Sever</p>
                    <p className="text-white">Vidcloud</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white text-2xl">You may also like</p>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {similarMovies?.map((movie, index) => (
                <MovieCards
                  mediaType={movie?.media_type}
                  movie={movie}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrailerPage;
