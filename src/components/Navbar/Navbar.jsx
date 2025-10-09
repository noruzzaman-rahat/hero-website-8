import React from "react";
import Container from "../Container/Container";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/allapp">App</NavLink>
                </li>
                <li>
                  <NavLink to="/instalation">Instalation</NavLink>
                </li>
              </ul>
            </div>
            <div className="flex gap-2 items-center">
              <img className="w-8 h-8" src={logo} alt="" />
              <Link
                to="/"
                className="text-xl font-bold bg-[linear-gradient(125.07deg,_rgba(99,46,227,1),_rgba(159,98,242,1)_100%)] text-transparent bg-clip-text "
              >
                HERO.IO
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/allapp">App</NavLink>
              </li>
              <li>
                <NavLink to="/instalation">Instalation</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              to="https://github.com/noruzzaman-rahat"
              className="btn text-white bg-[linear-gradient(125.07deg,_rgba(99,46,227,1),_rgba(159,98,242,1)_100%)]"
            >
              <span>
                <FaGithub></FaGithub>{" "}
              </span>{" "}
              Contribute
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
