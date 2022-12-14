import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { selectUser } from "../features/userSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { userInfo } = useSelector(selectUser);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="h-[100px] px-2 text-white md:h-[50px] bg-[#1f1f1f] sticky top-0 right-0 left-0 z-10">
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center relative">
          <button onClick={handleShow}>
            <AiOutlineMenu style={{ margin: "4px" }} />
          </button>
          {show && (
            <ul className="z-999 text-center md:top-[40px] absolute p-2 top-[90px] left-[-16px] bg-white w-[150px] rounded-[10px]">
              <li className="p-4 text-black text-l">
                <Link to="/Home">Home</Link>
              </li>
              <li className="p-4 text-black text-l">
                <a href="/">Movies</a>
              </li>
              <li className="p-4 text-black text-l">
                <a href="/">Tv Show</a>
              </li>
              <li className="p-4 text-black text-l">
                <a href="/">Top IMDB</a>
              </li>
            </ul>
          )}
          <Link to="/">
            <div className="logo w-[30px] mx-4 my-2 flex items-center cursor-pointer ">
              <img className="w-full" src={Logo} alt="" />
            </div>{" "}
          </Link>
        </div>
        <div className="w-full mr-2 hidden md:flex">
          <input
            className="w-[90%] py-1 px-2 rounded-l-[4px] border-none outline-none bg-[#121212]"
            placeholder="Enter keywords"
            type="text"
          />
          <button className="text-white px-6 py-2 bg-[#4d4c4b] rounded-r-[4px] cursor-pointer ">
            <AiOutlineSearch />
          </button>
        </div>
        <Link to="/login" className="block">
          <button
            className={`${
              userInfo && "hidden"
            } flex items-center hover:opacity-60 `}
          >
            <CgProfile
              style={{
                marginRight: "8px",
              }}
            />
            Login
          </button>
        </Link>
        <Link
          className={`${userInfo ? "flex" : "hidden"} items-center mr-2`}
          to="/profile"
        >
          <CgProfile
            style={{
              marginRight: "8px",
            }}
          />
          {userInfo?.username}
        </Link>
      </div>
      <div className=" w-full flex md:hidden ">
        <input
          className="w-full p-1 rounded-l-[4px] border-none outline-none bg-[#121212]"
          placeholder="Enter keywords"
          type="text"
        />
        <Link
          to="/home"
          className="text-white px-6 py-2 bg-[#4d4c4b] rounded-r-[4px] cursor-pointer "
        >
          <AiOutlineSearch />
        </Link>
      </div>
    </div>
  );
};

export default Header;
