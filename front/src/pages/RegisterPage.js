import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login, register } from "../features/apiCall";
import { selectUser } from "../features/userSlice";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    register(dispatch, {
      username,
      email,
      password,
    });
  };

  return (
    <div className="text-white flex justify-center items-center w-screen h-screen">
      <div className="rounded-[5px] bg-[#352a2a] w-[400px] h-[400px]">
        <div className="p-6">
          <h2 className="text-center text-2xl font-bold py-4">Welcome</h2>
          <form className="">
            <label htmlFor="">USERNAME</label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 my-2 rounded-[5px] text-[#aaa] outline-none "
              type="text"
              placeholder="Enter your username"
            />
            <label htmlFor="">EMAIL ADDRESS</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 my-2 rounded-[5px] text-[#aaa] outline-none "
              type="text"
              placeholder="name@email.com"
            />
            <label htmlFor="">PASSWORD</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 my-2 rounded-[5px] text-[#aaa] outline-none "
              type="password"
              placeholder="Password"
            />
          </form>
          <button
            onClick={handleRegister}
            className="w-full bg-[#9b1a29] py-2 rounded-[5px] my-2 hover:opacity-60"
          >
            Register
          </button>
        </div>

        <div className="flex justify-center items-center border-t border-white w-full bg-[#444] h-[64px] ">
          Have an account?{" "}
          <Link to="/login" className="mx-4 hover:opacity-60 cursor-pointer">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
