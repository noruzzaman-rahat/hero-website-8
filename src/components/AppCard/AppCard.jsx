import React from "react";
import { Link } from "react-router";


const AppCard = ({app}) => {
  const { title,ratingAvg,downloads, image,id } = app;
  return (
    <Link to={`/appdetails/${id}`}>
      <div className="w-60 h-72 bg-white border rounded-lg p-3">
        <div className="bg-gray-400 w-full h-[70%] overflow-hidden rounded-lg">
          <img src={image} className="w-full h-full object-cover overflow-hidden"  alt="" />
        </div>
        <div className="my-4 space-y-2">
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>
          <div className="flex justify-between">
            <p>{downloads}</p>
            <p>{ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
