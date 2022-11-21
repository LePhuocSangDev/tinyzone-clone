import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../features/apiCall";
import { selectUser } from "../features/userSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email, Example: youremail@example.com")
      .required("Don't leave this field empty"),
    password: yup
      .string()
      .min(5, "Please enter minimum 5 letters")
      .max(25, "Please enter maximum 25 letters")
      .required("Don't leave this field empty"),
  })
  .required();
const LoginPage = () => {
  const dispatch = useDispatch();
  const {
    resetField,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  console.log(errors);
  const handleLogin = (data) => {
    login(dispatch, data);
    resetField("password");
  };

  const { userInfo, isFetching } = useSelector(selectUser);

  return (
    <div className="text-white flex justify-center items-center w-screen h-screen">
      <div className="rounded-[5px] bg-[#352a2a] w-[90%] max-w-[400px] h-[400px]">
        <div className="p-6">
          <h2 className="text-center text-2xl font-bold py-4">Welcome back</h2>
          <form id="form" onSubmit={handleSubmit(handleLogin)}>
            <label htmlFor="">EMAIL ADDRESS</label>
            <input
              {...register("email")}
              className="w-full p-2 my-2 rounded-[5px] text-[#aaa] outline-none "
              type="text"
              placeholder="name@email.com"
            />
            <p className="text-[red]">{errors.email?.message}</p>
            <label htmlFor="">PASSWORD</label>
            <input
              {...register("password")}
              className="w-full p-2 my-2 rounded-[5px] text-[#aaa] outline-none "
              type="password"
              placeholder="Password"
            />
            <p className="text-[red]">{errors.password?.message}</p>
            <div>
              <input type="checkbox" /> Remember me
              <span className="ml-16">Forgot password?</span>
            </div>
          </form>
          <input
            type="submit"
            form="form"
            className="w-full bg-[#9b1a29] py-2 rounded-[5px] my-2 hover:opacity-60 cursor-pointer disabled:opacity-40"
            value="Login"
            disabled={isFetching}
          />
        </div>

        <div className="flex justify-center items-center border-t border-white w-full bg-[#444] h-[64px] ">
          Don't have an account?{" "}
          <Link to="/register" className="mx-4 hover:opacity-60 cursor-pointer">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
