import React from "react";
import { Link } from "react-router";


const AppCard = ({app}) => {
  const { title,ratingAvg,downloads, image,id } = app;
  return (
    <Link to={`/appdetails/${id}`}>
      <div className="w-60 h-72 bg-white rounded-lg p-3 shadow-2xl transform hover:-translate-y-3 transition-all duration-200">
        <div className="bg-gray-400 w-full h-[70%] overflow-hidden rounded-lg">
          <img src={image} className="w-full h-full object-cover overflow-hidden"  alt="" />
        </div>
        <div className="my-4 space-y-2">
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>
          <div className="flex justify-between">

           <div className="flex items-center gap-2 w-[71px] h-[31px] bg-[#f1f5e8] p-1 rounded-sm">
            <img src="icon-downloads.png" className="h-[16px] w-[16px]" alt="" />
             <p className="text-[#00d390]">{downloads}</p>
           </div>

           <div className="flex items-center gap-2 w-[70px] h-[31px] bg-[#fff0e1] p-1 rounded-sm">
            <img src="icon-ratings.png" className="h-[16px] w-[16px]" alt="" />
            <p className="text-[#ff8811]">{ratingAvg}</p>
           </div>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
