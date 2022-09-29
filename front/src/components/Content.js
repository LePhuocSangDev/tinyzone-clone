import React, { useEffect, useRef, useState } from "react";
import SocialIcons from "./SocialIcons";
import { GoBroadcast } from "react-icons/go";
import MovieCards from "./MovieCards";
import axios from "../axios";
import requests from "../request";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Movies from "./Movies";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader/Loader";

const Content = () => {
  const sliderRef = useRef();
  console.log(sliderRef.current?.getBoundingClientRect());
  const fetchData = async () => {
    const request = await axios.get(requests.fetchTopRated);
    return request.data;
  };
  const { data, isLoading, isError } = useQuery(["movies"], fetchData);

  const movies = data?.results;
  const handleNext = () => {
    sliderRef.current.style.transform = `translateX(500px)`;
  };
  const handlePrev = () => {
    sliderRef.current.style.transform = `translateX(-500px)`;
  };
  return (
    <>
      {" "}
      {isLoading ? (
        <Loader />
      ) : (
        <div className=" col-span-12 md:col-span-10 p-4">
          <div className="flex flex-col lg:flex-row items-center bg-[#333] p-4 text-sm">
            <div className="mx-2 text-8xl">
              <GoBroadcast />
            </div>
            <div className="pt-4 lg:pt-0">
              <p>
                Tinyzone is a Free Movies Streaming site with following feature
                : <br />- Free hd movies streaming in 1080p and 720p. - English
                and Spanish subtitles supported. <br /> - Watch movies online
                and Free movies streaming for REAL. <br /> 123movies or fmovies
                used to be a really good choice but now they give too much
                buffering, so if you need a better place to stream movies in
                high speed streaming, let's try tinyzonetv. We have over 250000
                videos in our database, all come with both English and Spanish
                subtitles, and most interesting thing is you can stream hd
                movies with no account required. Enjoy your favorite movies and
                shows now with just one click on Tinyzone now.
                <span className="text-[#aaa]">
                  watch isn't it romantic online free, the dark knight online
                  free, watch mean girls online free, watch cars online free,
                  watch white chicks online free, watch fyre fraud online free
                </span>
              </p>
            </div>
          </div>
          <SocialIcons />
          <div>
            <h2 className="text-xl font-extrabold text-white my-4">
              Most Watched
            </h2>
            <div className="relative">
              <button
                className="absolute top-[50%] left-[10px] translate-y-[-50%] z-10"
                onClick={handlePrev}
              >
                <AiOutlineArrowLeft
                  style={{
                    color: "white",
                    fontSize: "35px",
                    backgroundColor: "rgba(0,0,0,0.8)",
                  }}
                />
              </button>
              <div
                className=" flex overflow-x-auto container translateX(0px) transition-all duration-1000 ease"
                ref={sliderRef}
              >
                {movies?.map((movie, index) => (
                  <MovieCards
                    mediaType={movie?.media_type}
                    id={movie.id}
                    key={index}
                    size="lg"
                    title={
                      movie?.title ||
                      movie?.original_title ||
                      movie?.name ||
                      movie?.original_name
                    }
                    image={movie?.backdrop_path || movie?.poster_path}
                  />
                ))}
              </div>

              <button
                className="absolute top-[50%] right-0 translate-x-[-50%] translate-y-[-50%]"
                onClick={handleNext}
              >
                <AiOutlineArrowRight
                  style={{
                    color: "white",
                    fontSize: "35px",
                    backgroundColor: "rgba(0,0,0,0.8)",
                  }}
                />
              </button>
            </div>
          </div>
          <Movies
            caption="Trending"
            hasTypeof="true"
            fetchUrl={requests.fetchTrending}
          />
          <Movies
            caption="Netflix Originals"
            fetchUrl={requests.fetchNetflixOriginals}
          />
          <Movies caption="Top Rated" fetchUrl={requests.fetchTopRated} />
        </div>
      )}
    </>
  );
};

export default Content;
