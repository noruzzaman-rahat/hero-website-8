import React, {  useState } from "react";
import AppCard from "../components/AppCard/AppCard";
import useAppData from "../Hooks/useAppData";
import Container from "../components/Container/Container";

const AllApp = () => {
  const { appData } = useAppData();
  const [search, setSearch] = useState('')
  const trimSearch = search.trim().toLowerCase()

 const fillterdeApp = search ? (appData.filter(app=> 
      app.title.trim().toLowerCase().includes(trimSearch)))
      : appData ;
    
  
 
  return (
    <div>
      <Container className="">
        <div className="text-center space-y-3 py-10">
          <h1 className="text-3xl font-bold ">Our All Applications</h1>
          <p className="text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="my-8 px-3 flex justify-between items-center">
          <div className="text-xl font-semibold"><p>({fillterdeApp.length}) App Founded</p></div>
          <div>
            <label value={search} onChange={(e)=> setSearch(e.target.value)} className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input  type="search" required placeholder="Search" />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
          {fillterdeApp.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllApp;
