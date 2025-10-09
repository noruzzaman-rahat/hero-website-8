import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router";
import Footer from "../components/Footer/Footer";
import AppErrImg from "../assets/App-Error.png"
const AppErrorPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col flex-1 space-y-3 justify-center items-center my-10">
        <img className="w-80" src={AppErrImg} alt="" />
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-center">
            Oops, App not found!
          </h1>
          <p className="text-center">
            The page you are looking for is not available.
          </p>
          <Link
            to="/"
            className="btn bg-[linear-gradient(125.07deg,_rgba(99,46,227,1),_rgba(159,98,242,1)_100%)]"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppErrorPage;
