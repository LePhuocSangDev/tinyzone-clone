import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const MovieCards = ({ image, title, size, id, mediaType }) => {
  const [show, setShow] = useState(false);

  return (
    // to handle if there might be no mediaType
    <Link to={`/watch${!mediaType ? "/movie" : "/" + mediaType}/${id}`}>
      <div
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
        className={`${
          size === "lg" && "w-[160px] lg:w-[250px]"
        } m-2 min-w-[35%] sm:min-w-[30%] md:min-w-[25%] hover:opacity-60 cursor-pointer`}
      >
        {/* // Play button */}
        <div className="relative">
          <div
            className={`${
              !show && "hidden"
            } w-[45px] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[60px] text-white`}
          >
            <AiFillPlayCircle />
          </div>
          <img
            className="w-full h-[240px] lg:h-[281px] 
       "
            src={`https://image.tmdb.org/t/p/w500/${image}`}
            alt=""
          />
        </div>
        <div>
          <h4 className="text-white font-extrabold text-md lg:py-2">{title}</h4>
          <div className="text-[#aaa] text-[12px] lg:text-sm flex items-center ">
            <span className="p-[2px] border-white border rounded-[3px] mx-1">
              HD
            </span>
            <span className="mx-2">SS3</span>
            <span className="mx-2 text-2xl ">&#8226;</span>
            <span className="mx-2">Eps 6</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCards;
