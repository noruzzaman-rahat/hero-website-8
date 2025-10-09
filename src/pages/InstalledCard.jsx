import React from "react";
import Container from "../components/Container/Container";
import downlowdIcon from "../assets/icon-downloads.png";
import ratingsIcon from "../assets/icon-ratings.png";
import { deleteLocalStorage } from "../Utilities/AddToLocalStorage";
const InstalledCard = ({ app,onUninstall }) => {
  console.log(app);

  const { title, image, ratingAvg, downloads, size, id } = app;
 const handleUninstall = (id) =>{
      onUninstall(id)
      deleteLocalStorage(id)
 }
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center my-5 bg-white p-5 rounded-2xl">
          <div className="flex gap-10 items-center">
            <div className="w-30 h-32 bg-gray-300 rounded-2xl">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={image}
                alt=""
              />
            </div>
            <div className="space-y-2">
              <div>
                <h1 className="text-xl font-semibold">{title}</h1>
              </div>
              <div className="flex items-center gap-12 text-gray-400">
                <div className="flex items-center gap-2">
                  <img className="w-4 h-4 " src={downlowdIcon} alt="" />
                  <div className="">
                    <h1 className="">{downloads}</h1>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-4 h-4" src={ratingsIcon} alt="" />
                  <div iv className="">
                    <h1 className="">{ratingAvg}</h1>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p>{size} MB</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button onClick={()=>handleUninstall(id)} className="btn">Uninstall</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InstalledCard;
