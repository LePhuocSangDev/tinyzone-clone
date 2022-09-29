import React, { useRef } from "react";
import Header from "../components/Header";
const LoginPage = () => {
  const emailRef = useRef();
  const passWordRef = useRef();

  return (
    <div className="text-white flex justify-center items-center w-screen h-screen">
      <div className="rounded-[5px] bg-[#352a2a] w-[400px] h-[400px]">
        <div className="p-6">
          <h2 className="text-center text-2xl font-bold py-4">Welcome back</h2>
          <form className="">
            <label htmlFor="">EMAIL ADDRESS</label>
            <input
              ref={emailRef}
              className="w-full p-2 my-2 rounded-[5px] text-[#aaa] outline-none "
              type="text"
              placeholder="name@email.com"
            />
            <label htmlFor="">PASSWORD</label>
            <input
              ref={passWordRef}
              className="w-full p-2 my-2 rounded-[5px] text-[#aaa] outline-none "
              type="password"
              placeholder="Password"
            />
            <div>
              <input type="checkbox" /> Remember me
              <span className="ml-16">Forgot password?</span>
            </div>
          </form>
          <button className="w-full bg-[#9b1a29] py-2 rounded-[5px] my-2 hover:opacity-60">
            Login
          </button>
        </div>

        <div className="flex justify-center items-center border-t border-white w-full bg-[#444] h-[64px] ">
          Don't have an account?{" "}
          <span className="mx-4 hover:opacity-60 cursor-pointer">Register</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
