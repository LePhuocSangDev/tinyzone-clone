import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moviesRequest from "../../axios";
import { logout } from "../../features/apiCall";
import { selectUser } from "../../features/userSlice";
import requests from "../../request";
import "./ProfilePage.css";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(selectUser);
  const handleLogout = () => {
    logout(dispatch);
  };

  const getData = async () => {
    const request = await moviesRequest(requests.fetchRomanceMovies);

    return request.data.results;
  };

  const { data: profileMovies } = useQuery(["profileMovie"], getData);
  return (
    <div className="grid grid-cols-10 gap-4 p-4 text-white">
      <div className="col-span-10 lg:col-span-7  bg-[rgba(255,255,255,.05)] rounded-md p-4 flex flex-col gap-4 h-screen overflow-y-auto container">
        <h4 className="text-center text-2xl">Like List:</h4>
        <div className="flex flex-col gap-4">
          {profileMovies?.splice(0, 6).map((movie) => (
            <div
              key={movie._id}
              className="flex items-center rounded-md pr-1 justify-between relative border border-[rgba(255,255,255,.09)]"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${
                    movie?.backdrop_path || movie?.poster_path
                  }`}
                  alt=""
                  className="w-[20%] rounded-md"
                />
                <div className="">
                  <p className="text-[#9e9b9b] ">
                    Title:{" "}
                    <span className="text-white font-bold">
                      {movie?.title ||
                        movie?.original_title ||
                        movie?.name ||
                        movie?.original_name}
                    </span>
                  </p>
                  <p className="text-[#9e9b9b] ">
                    Rating:{" "}
                    <span className="text-white font-bold">
                      {movie?.vote_average}
                    </span>
                  </p>
                </div>
              </div>
              <button>X</button>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-10 lg:col-span-3 bg-[rgba(255,255,255,.05)] lg:h-[30vh] p-2 flex flex-col justify-evenly">
        <p>
          <span className="text-[#9e9b9b]">Username:</span>{" "}
          <span>{userInfo?.username}</span>
        </p>
        <p>
          <span className="text-[#9e9b9b]">Email:</span>{" "}
          <span>{userInfo?.email}</span>
        </p>
        {userInfo && (
          <button
            onClick={handleLogout}
            className="w-full px-2 py-2 block text-white rounded-sm text-center bg-[#9b1a29]"
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
