import React from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="grid grid-cols-10 gap-4 p-4 text-white">
      <div className="col-span-10 lg:col-span-7  bg-[rgba(255,255,255,.05)] rounded-md p-4 flex flex-col gap-4 h-screen overflow-y-auto container">
        <h4 className="text-center text-2xl">Like List:</h4>
        <div className="flex flex-col gap-4">
          <div className="flex items-center rounded-md pr-1 justify-between relative border border-[rgba(255,255,255,.09)]">
            <div className="flex gap-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZlbmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-[20%] rounded-md"
              />
              <div className="">
                <p className="text-[#9e9b9b] ">
                  Title: <span className="text-white font-bold">Thor</span>
                </p>
                <p className="text-[#9e9b9b] ">
                  Rating: <span className="text-white font-bold">Thor</span>
                </p>
              </div>
            </div>
            <button>X</button>
          </div>
          <div className="flex items-center rounded-md pr-1 justify-between relative border border-[rgba(255,255,255,.09)]">
            <div className="flex gap-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZlbmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-[20%] rounded-md"
              />
              <div className="">
                <p className="text-[#9e9b9b] ">
                  Title: <span className="text-white font-bold">Thor</span>
                </p>
                <p className="text-[#9e9b9b] ">
                  Rating: <span className="text-white font-bold">Thor</span>
                </p>
              </div>
            </div>
            <button>X</button>
          </div>
          <div className="flex items-center rounded-md pr-1 justify-between relative border border-[rgba(255,255,255,.09)]">
            <div className="flex gap-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZlbmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-[20%] rounded-md"
              />
              <div className="">
                <p className="text-[#9e9b9b] ">
                  Title: <span className="text-white font-bold">Thor</span>
                </p>
                <p className="text-[#9e9b9b] ">
                  Rating: <span className="text-white font-bold">Thor</span>
                </p>
              </div>
            </div>
            <button>X</button>
          </div>
          <div className="flex items-center rounded-md pr-1 justify-between relative border border-[rgba(255,255,255,.09)]">
            <div className="flex gap-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZlbmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-[20%] rounded-md"
              />
              <div className="">
                <p className="text-[#9e9b9b] ">
                  Title: <span className="text-white font-bold">Thor</span>
                </p>
                <p className="text-[#9e9b9b] ">
                  Rating: <span className="text-white font-bold">Thor</span>
                </p>
              </div>
            </div>
            <button>X</button>
          </div>
          <div className="flex items-center rounded-md pr-1 justify-between relative border border-[rgba(255,255,255,.09)]">
            <div className="flex gap-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZlbmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-[20%] rounded-md"
              />
              <div className="">
                <p className="text-[#9e9b9b] ">
                  Title: <span className="text-white font-bold">Thor</span>
                </p>
                <p className="text-[#9e9b9b] ">
                  Rating: <span className="text-white font-bold">Thor</span>
                </p>
              </div>
            </div>
            <button>X</button>
          </div>
        </div>
      </div>
      <div className="col-span-10 lg:col-span-3 bg-[rgba(255,255,255,.05)] lg:h-[30vh] p-2 flex flex-col justify-evenly">
        <p>
          <span className="text-[#9e9b9b]">Username</span> :{" "}
          <span>phuocsang123</span>
        </p>
        <p>
          <span className="text-[#9e9b9b]">Email</span>{" "}
          <span>phuocsang@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
