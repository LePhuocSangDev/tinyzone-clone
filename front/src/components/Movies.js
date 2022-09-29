import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import MovieCards from "./MovieCards";

const Movies = ({ caption, hasTypeof, fetchUrl }) => {
  const getData = async () => {
    const request = await axios.get(fetchUrl);
    setDataForFilter(request.data.results);
    return request.data.results;
  };
  const { data } = useQuery(["moviesByType"], getData);

  const [typeMovie, setTypeMovie] = useState(false);
  const [typeTvShow, setTypeTvShow] = useState(true);
  const [dataForFilter, setDataForFilter] = useState([]);
  const movies = dataForFilter?.filter((movie) => movie.media_type === "movie");
  const tvShows = dataForFilter?.filter((movie) => movie.media_type === "tv");

  const handleType = () => {
    setTypeMovie((prevTypeMovie) => !prevTypeMovie);
    setTypeTvShow((prevTypeTvShow) => !prevTypeTvShow);
  };
  const handleRender = () => {
    if (hasTypeof && typeMovie) {
      return movies?.map((movie, index) => (
        <MovieCards
          mediaType={movie?.media_type}
          key={index}
          title={
            movie?.title ||
            movie?.original_title ||
            movie?.name ||
            movie?.orginal_name
          }
          image={movie?.backdrop_path || movie?.poster_path}
          id={movie.id}
        />
      ));
    } else if (hasTypeof && typeTvShow) {
      return tvShows?.map((movie, index) => (
        <MovieCards
          mediaType={movie?.media_type}
          key={index}
          title={
            movie?.title ||
            movie?.original_title ||
            movie?.name ||
            movie?.orginal_name
          }
          image={movie?.backdrop_path || movie?.poster_path}
          id={movie.id}
        />
      ));
    } else {
      return data?.map((movie, index) => (
        <MovieCards
          mediaType={movie?.media_type}
          key={index}
          title={
            movie?.title ||
            movie?.original_title ||
            movie?.name ||
            movie?.orginal_name
          }
          image={movie?.backdrop_path || movie?.poster_path}
          id={movie.id}
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
        <div
          className={`${
            hasTypeof ? "inline-block" : "hidden"
          } border border-white  mx-2`}
        >
          <button
            onClick={handleType}
            className={`px-2 h-full ${
              typeMovie && "bg-white text-black"
            } text-white`}
          >
            Movies Test
          </button>
          <button
            onClick={handleType}
            className={`border-l border-l-black h-full px-2 ${
              typeTvShow && "bg-white text-black"
            } text-white`}
          >
            TV Shows
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[4px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {handleRender()}
      </div>
    </div>
  );
};

export default Movies;
