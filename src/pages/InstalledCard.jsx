import React from "react";
import Container from "../components/Container/Container";
import downlowdIcon from "../assets/icon-downloads.png";
import ratingsIcon from "../assets/icon-ratings.png";


const InstalledCard = ({ app, onUninstall }) => {
  const { title, image, ratingAvg, downloads, size, id } = app;

  return (
    <>
      
      <Container> 
      <div className="flex flex-col md:flex-row justify-between items-center my-4 bg-white p-4 md:p-5 rounded-2xl shadow-sm">
        {/* Image */}
        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={image}
            alt={title}
          />
        </div>

        {/* Text info */}
        <div className="flex-1 mt-3 md:mt-0 md:ml-6 space-y-1">
          <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-4 text-gray-400 text-sm md:text-base mt-1">
            {/* Downloads */}
            <div className="flex items-center gap-1 md:gap-2">
              <img className="w-4 h-4 md:w-5 md:h-5" src={downlowdIcon} alt="" />
              <span>{downloads}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 md:gap-2">
              <img className="w-4 h-4 md:w-5 md:h-5" src={ratingsIcon} alt="" />
              <span>{ratingAvg}</span>
            </div>

            {/* Size */}
            <div className="flex items-center">
              <span>{size} MB</span>
            </div>
          </div>
        </div>

        {/* Uninstall button */}
        <div className="mt-3 md:mt-0 md:ml-4">
          <button
            onClick={() => onUninstall(id, title)}
            className="btn btn-sm md:btn-md bg-[#00d390] text-white hover:bg-[#00c07f] transition-colors"
          >
            Uninstall
          </button>
        </div>
      </div>
    </Container>
    
    </>
  );
};

export default InstalledCard; 
