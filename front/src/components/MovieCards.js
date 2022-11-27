import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const MovieCards = ({ movie, mediaType, size }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const refreshPage = () => {
    setTimeout(() => navigate(0), 50);
  };

  return (
    // to handle if there might be no mediaType
    <Link
      to={`/watch${
        mediaType === "movie" || !mediaType ? "/movie" : "/" + mediaType
      }/${movie?.id}`}
      className="block"
    >
      <div
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
        onClick={() => refreshPage()} // load again to prevent no loading similar movie when click
        className={`${
          size === "lg" && "w-[20vw] max-w-[240px] min-w-[190px]"
        } hover:opacity-60 cursor-pointer`}
      >
        {/* // Play button */}
        <div className="relative w-full h-full">
          <div
            className={`${
              !show && "hidden"
            } w-[45px] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[60px] text-white`}
          >
            <AiFillPlayCircle />
          </div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt="/"
          />
        </div>
        <div>
          <h4 className="text-white font-[600] text-md lg:py-2">
            {movie?.title ||
              movie?.original_title ||
              movie?.name ||
              movie?.original_name}
          </h4>
          <div className="text-[#aaa] text-[12px] lg:text-sm flex items-center ">
            <span className="p-[2px] border-white border rounded-[3px] mx-1">
              HD
            </span>
            <span className="mx-2">SS {movie?.number_of_seasons}</span>
            <span className="mx-2 text-2xl ">&#8226;</span>
            <span className="mx-2">Eps {movie?.number_of_episodes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCards;
