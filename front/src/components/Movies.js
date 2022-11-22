import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import moviesRequest from "../axios";
import MovieCards from "./MovieCards";

const Movies = ({ caption, hasTypeof, fetchUrl, type }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const request = await moviesRequest(fetchUrl);
      setData(request.data.results);
    };

    getData();
  }, [fetchUrl]);
  console.log(data);
  const [typeMovie, setTypeMovie] = useState(false);
  const [typeTvShow, setTypeTvShow] = useState(true);
  const movies = data?.filter((movie) => movie.media_type === "movie");
  const tvShows = data?.filter((movie) => movie.media_type === "tv");

  const handleType = () => {
    setTypeMovie((prevTypeMovie) => !prevTypeMovie);
    setTypeTvShow((prevTypeTvShow) => !prevTypeTvShow);
  };

  const handleRender = () => {
    if (hasTypeof && typeMovie) {
      return movies?.map((movie, index) => (
        <MovieCards
          mediaType={movie?.media_type || type}
          key={index}
          movie={movie}
        />
      ));
    } else if (hasTypeof && typeTvShow) {
      return tvShows?.map((movie, index) => (
        <MovieCards
          mediaType={movie?.media_type || type}
          key={index}
          movie={movie}
        />
      ));
    } else {
      return data?.map((movie, index) => (
        <MovieCards
          mediaType={movie?.media_type || type}
          key={index}
          movie={movie}
        />
      ));
    }
  };

  return (
    <div>
      <div className="my-4">
        <h2 className="inline text-2xl text-white font-bold text-">
          {caption}
        </h2>
        <div className={`${hasTypeof ? "inline-block" : "hidden"} mx-2`}>
          <button
            onClick={handleType}
            className={`px-2 ${typeMovie && "bg-white text-black"} text-white`}
          >
            Movies
          </button>
          <button
            onClick={handleType}
            className={`h-full px-2 ${
              typeTvShow && "bg-white text-black"
            } text-white`}
          >
            TV Shows
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[16px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {handleRender()}
      </div>
    </div>
  );
};

export default Movies;
