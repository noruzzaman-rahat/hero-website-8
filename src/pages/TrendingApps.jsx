import React, { useEffect, useState } from "react";
import useAppData from "../Hooks/useAppData";
import Container from "../components/Container/Container";
import AppCard from "../components/AppCard/AppCard";
import { Link } from "react-router";
import LoadImg from "../assets/logo.png";

const TrendingApps = () => {
  const { appData } = useAppData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const trendData = appData.slice(0, 8);

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-3 mt-[30px]">
        <div className="w-[100px] h-[100px] border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin">
          <img src={LoadImg} alt="" />
        </div>
        <p className="text-gray-500 text-sm">Searching Trending Apps...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center space-y-3 py-10">
        <h1 className="text-3xl font-bold">Trending Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        {trendData.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      <div className="py-10 flex justify-center">
        <Link
          to="/allapp"
          className="btn w-[145px] h-[48px] bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-xl text-white transform hover:-translate-y-1 transition-all duration-200">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
