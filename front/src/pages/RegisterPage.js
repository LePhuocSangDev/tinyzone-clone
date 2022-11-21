import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { register as registerUser } from "../features/apiCall";

import * as yup from "yup";

const schema = yup
  .object({
    username: yup
      .string()
      .min(5, "Please enter minimum 5 letters")
      .max(25, "Please enter maximum 25 letters")
      .required("Don't leave this field empty"),
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
const RegisterPage = () => {
  const { isFetching } = useSelector(selectUser);
  const {
    resetField,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const dispatch = useDispatch();

  return (
    <div className="text-white flex justify-center items-center w-screen h-screen">
      <div className="rounded-[5px] bg-[#352a2a] w-[90%] max-w-[400px] h-[400px]">
        <div className="p-6">
          <h2 className="text-center text-2xl font-bold py-4">Welcome</h2>
          <form
            id="form1"
            onSubmit={handleSubmit((data) => {
              registerUser(dispatch, data);
              resetField("username");
              resetField("email");
              resetField("password");
            })}
          >
            <label htmlFor="">USERNAME</label>
            <input
              {...register("username", { required: true })}
              className="w-full p-2 my-2 rounded-[5px] text-[#aaa] outline-none "
              type="text"
              placeholder="Enter your username"
            />
            <p className="text-[red]">{errors.username?.message}</p>
            <label htmlFor="">EMAIL ADDRESS</label>
            <input
              {...register("email", { required: true })}
              className="w-full p-2 my-2 rounded-[5px] text-[#aaa] outline-none "
              type="text"
              placeholder="name@email.com"
            />
            <p className="text-[red]">{errors.email?.message}</p>
            <label htmlFor="">PASSWORD</label>
            <input
              {...register("password", { required: true })}
              className="w-full p-2 my-2 rounded-[5px] text-[#aaa] outline-none "
              type="password"
              placeholder="Password"
            />
            <p className="text-[red]">{errors.password?.message}</p>
          </form>
          <input
            form="form1"
            value="Register"
            type="submit"
            disabled={isFetching}
            className="disabled:cursor-not-allowed w-full bg-[#9b1a29] py-2 rounded-[5px] my-2 hover:opacity-60 cursor-pointer disabled:opacity-40"
          />
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
