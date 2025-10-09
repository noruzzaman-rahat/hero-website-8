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
  };

  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 md:my-5 p-3 bg-base-200 rounded-2xl">
          <div className="md:w-44 h-60 bg-gray-300 rounded-2xl">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={image}
              alt=""
            />
          </div>
          <div className="space-y-3">
            <div className="space-y-2 border-b border-gray-300 pb-5">
              <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
              <p className="md:text-xl ">
                <span className="text-gray-400">Develop by:</span>
                <span className="font-medium bg-[linear-gradient(125.07deg,_rgba(99,46,227,1),_rgba(159,98,242,1)_100%)] text-transparent bg-clip-text">
                  {" "}
                  {companyName}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-12">
              <div className="flex flex-col">
                <img className="w-5 md:w-7" src={downlowdIcon} alt="" />
                <div className="my-2">
                  <p className="text-[#7f8488] text-xs md:text-sm">Download</p>
                  <h1 className="text-xl md:text-[27px] font-bold">
                    {downloads}
                  </h1>
                </div>
              </div>
              <div className="flex flex-col">
                <img className="w-5 md:w-7" src={ratingsIcon} alt="" />
                <div className="my-2">
                  <p className="text-[#7f8488] text-xs md:text-sm">
                    Average Ratings
                  </p>
                  <h1 className="text-xl md:text-[27px] font-bold">
                    {ratingAvg}
                  </h1>
                </div>
              </div>
              <div className="flex flex-col">
                <img className="w-5 md:w-7" src={reviewIcon} alt="" />
                <div className="my-2">
                  <p className="text-[#7f8488] text-xs md:text-sm">
                    Total Review
                  </p>
                  <h1 className="text-xl md:text-[27px] font-bold">
                    {reviews}
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleInstall(id)}
                disabled={installed}
                className={`btn font-semibold ${
                  installed
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-teal-400 text-white"
                }`}
              >
                {installed ? "Installed" : "Install Now"}{" "}
                <span>({size} MB)</span>
              </button>
            </div>
          </div>
        </div>

        <div className="my-20">
          {
            <div className="w-full h-72 md:h-96 my-20">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={chartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <YAxis dataKey="name" type="category" />
                  <XAxis type="number" />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="count"
                    fill="#8884d8"
                    barSize={30}
                    activeBar={<Rectangle fill="pink" stroke="blue" />}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          }
        </div>
        <div>
          <h1 className="text-xl font-bold my-3">Description</h1>
          <p className="text-justify">{description}</p>
        </div>
      </Container>
    </div>
  );
};

export default AppDetails;
