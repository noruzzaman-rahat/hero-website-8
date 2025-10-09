import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router";
import playstoreImg from "../../assets/PlayStore.png";
import appstoreImg from "../../assets/AppStore.png";
import heroImg from "../../assets/hero.png";

const HeroSection = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col justify-center space-y-10 pt-10">
          <div className="space-y-7">
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              We Build <br />{" "}
              <span className="bg-[linear-gradient(125.07deg,_rgba(99,46,227,1),_rgba(159,98,242,1)_100%)] text-transparent bg-clip-text">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="w-3/4 mx-auto text-gray-400 text-center">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex items-center gap-2 justify-center">
              <Link to="https://play.google.com/store/games?hl=en">
                <img src={playstoreImg} alt="" />{" "}
              </Link>
              <Link to="https://www.apple.com/app-store/">
                {" "}
                <img src={appstoreImg} alt="" />
              </Link>
            </div>
          </div>
          <div className="mx-auto">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </Container>
      <div className="bg-[linear-gradient(125.07deg,_rgba(99,46,227,1),_rgba(159,98,242,1)_100%)]">
        <Container>
          <div className="space-y-10 py-10">
            <h1 className="text-3xl font-bold text-center text-white">
              Trusted by Millions, Built for You
            </h1>
            <div className="flex justify-around items-center">
              <div className="flex justify-center ">
                <div className="space-y-2 text-white pb-5 text-center">
                  <p className="text-base-100">Total Downloads</p>
                  <h1 className="text-xl md:text-3xl font-bold">29M</h1>
                  <p className="text-base-100">21% more than last month</p>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="space-y-2 text-white pb-5 text-center">
                  <p className="text-base-100">Total Reviews</p>
                  <h1 className="text-xl md:text-3xl font-bold">906K</h1>
                  <p className="text-base-100">46% more than last month</p>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="space-y-2 text-white pb-5 text-center">
                  <p className="text-base-100">Active Apps</p>
                  <h1 className="text-xl md:text-3xl font-bold">132+</h1>
                  <p className="text-base-100">31 more will Launch</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;
