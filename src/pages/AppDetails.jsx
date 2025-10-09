import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAppData from "../Hooks/useAppData";
import Container from "../components/Container/Container";
import downlowdIcon from "../assets/icon-downloads.png";
import ratingsIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  addToLocalStorage,
  getFromLocalStorage,
} from "../Utilities/AddToLocalStorage";
import AppErrorPage from "./AppErrorPage";

// Toastify Import
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppDetails = () => {
  const { id } = useParams();
  const { appData } = useAppData();
  const [installed, setInstalled] = useState(false);
  const appId = Number(id);

  useEffect(() => {
    const savedApps = getFromLocalStorage() || [];
    setInstalled(savedApps.map(Number).includes(appId));
  }, [appId]);

  if (!appData || appData.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-xl font-semibold text-gray-500">Loading...</h1>
      </div>
    );
  }

  const data = appData.find((data) => data.id === appId);
  if (!data) {
    return <AppErrorPage />;
  }

  const {
    title,
    image,
    ratingAvg,
    downloads,
    reviews,
    companyName,
    description,
    size,
  } = data;
  const chartData = data.ratings;

  const handleInstall = () => {
    addToLocalStorage(appId);
    setInstalled(true);

    toast.success(`${title} has been installed successfully!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background: "white", // Tailwind blue-800
        color: "gray", // text white
        fontWeight: "500",
        fontSize: "16px",
      },
    });
  };

  return (
    <div>
      <Container>
        {/* App Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 p-4 md:p-6 bg-base-200 rounded-2xl mt-[30px]">
          {/* App Image */}
          <div className="w-full md:w-44 h-56 md:h-60 bg-gray-300 rounded-2xl flex-shrink-0">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={image}
              alt={title}
            />
          </div>

          {/* App Info */}
          <div className="flex-1 space-y-4">
            {/* Title & Company */}
            <div className="space-y-2 border-b border-gray-300 pb-4 md:pb-5">
              <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
              <p className="md:text-lg flex flex-wrap items-center gap-1">
                <span className="text-gray-400">Developed by:</span>
                <span className="font-medium bg-[linear-gradient(125.07deg,_rgba(99,46,227,1),_rgba(159,98,242,1)_100%)] text-transparent bg-clip-text">
                  {companyName}
                </span>
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-4">
              {/* Download */}
              <div className="flex items-center gap-2 sm:gap-4 bg-white p-3 rounded-lg shadow-sm">
                <img
                  className="w-5 md:w-6"
                  src={downlowdIcon}
                  alt="downloads"
                />
                <div>
                  <p className="text-[#7f8488] text-xs md:text-sm">Download</p>
                  <h1 className="text-lg md:text-xl font-bold">{downloads}</h1>
                </div>
              </div>

              {/* Average Ratings */}
              <div className="flex items-center gap-2 sm:gap-4 bg-white p-3 rounded-lg shadow-sm">
                <img className="w-5 md:w-6" src={ratingsIcon} alt="ratings" />
                <div>
                  <p className="text-[#7f8488] text-xs md:text-sm">
                    Average Ratings
                  </p>
                  <h1 className="text-lg md:text-xl font-bold">{ratingAvg}</h1>
                </div>
              </div>

              {/* Total Reviews */}
              <div className="flex items-center gap-2 sm:gap-4 bg-white p-3 rounded-lg shadow-sm">
                <img className="w-5 md:w-6" src={reviewIcon} alt="reviews" />
                <div>
                  <p className="text-[#7f8488] text-xs md:text-sm">
                    Total Review
                  </p>
                  <h1 className="text-lg md:text-xl font-bold">{reviews}</h1>
                </div>
              </div>
            </div>

            {/* Install Button */}
            <div className="mt-3">
              <button
                onClick={handleInstall}
                disabled={installed}
                className={`btn w-full md:w-auto font-semibold ${
                  installed
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#00d390] text-white hover:bg-[#00c07f] transition-colors"
                }`}
              >
                {installed ? "Installed" : "Install Now"}{" "}
                <span>({size} MB)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="my-8 md:my-12 w-full h-64 md:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={chartData}
              margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <YAxis dataKey="name" type="category" width={80} />
              <XAxis type="number" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="count"
                fill="#8884d8"
                barSize={20}
                radius={[5, 5, 5, 5]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Description */}
        <div className="mb-[30px]">
          <h1 className="text-xl font-bold my-3">Description</h1>
          <p className="text-justify text-sm md:text-base">{description}</p>
        </div>
      </Container>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default AppDetails;
