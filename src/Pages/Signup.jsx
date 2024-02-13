import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userAction";

const Signup = () => {
  const navigate = useNavigate()
  const { loading, error,userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [data,setData] = useState({
    username:"",
    email:"",
    password:""

  })

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(registerUser(data))

  }
  return (
    <div className=" h-screen flex justify-center items-center bg-gradient-to-b from-indigo-600 to-purple-500">
      <form onSubmit={handleSubmit} className=" bg-[#ffffff] h-2/3 w-1/3 border rounded-xl border-blue-200 flex flex-col p-10 ">
        <h1 className="text-center text-2xl mb-4 font-medium text-[#023e8a]">
          Signup
        </h1>
        <div className="mb-3">
          <label htmlFor="username" className="text-left">
            Username
          </label>
          <input
            name="username"
            id="username"
            className="w-full border border-gray-300 rounded-md py-2 p-2 mt-1  focus:outline-none focus:border-blue-500"
            type="text"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="text-left">
            Email
          </label>
          <input
            name="email"
            id="email"
            className="w-full border border-gray-300 rounded-md py-2 p-2 mt-1  focus:outline-none focus:border-blue-500"
            type="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label className="text-left">Password</label>
          <input
            className="w-full border border-gray-300 rounded-md py-2 p-2 mt-1 focus:outline-none focus:border-blue-500"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div className=" mb-3 flex justify-center ">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Register
          </button>
        </div>
        <h1 className="block text-center">
          Already registered ? <span  className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/")}>Login</span>
        </h1>
      </form>
    </div>
  );
};

export default Signup;
