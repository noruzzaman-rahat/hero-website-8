import React, { useState, useEffect } from "react";
import AppCard from "../components/AppCard/AppCard";
import useAppData from "../Hooks/useAppData";
import Container from "../components/Container/Container";
import AppErrorPage from "./AppErrorPage";
import LoadImg from "../assets/logo.png";

const AllApp = () => {
  const { appData } = useAppData();
  const [search, setSearch] = useState("");
  const [filteredApp, setFilteredApp] = useState(appData);
  const [loading, setLoading] = useState(false);

  // Whenever search changes
  useEffect(() => {
    setLoading(true);

    // Simulate async filtering (like an API delay)
    const timeout = setTimeout(() => {
      const trimSearch = search.trim().toLowerCase();

      const result = search
        ? appData.filter((app) =>
            app.title.trim().toLowerCase().includes(trimSearch)
          )
        : appData;

      setFilteredApp(result);
      setLoading(false);
    }, 500); // 0.5s delay for smooth UX

    return () => clearTimeout(timeout);
  }, [search, appData]);

  return (
    <div>
      <Container>
        {/* Header */}
        <div className="text-center space-y-3 py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Our All Applications
          </h1>
          <p className="text-[#627382] text-sm sm:text-base px-3 sm:px-0">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Search */}
        <div className="my-6 sm:my-8 px-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-lg sm:text-xl font-semibold">
            <p>({filteredApp.length}) App Found</p>
          </div>

          <div className="w-full sm:w-auto flex items-center gap-2 border px-3 py-2 rounded-md shadow-sm bg-white cursor-pointer  hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-1 transform transition-all duration-200">
            <svg
              className="h-[1.2em] opacity-50"
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
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search applications..."
              className="outline-none w-full bg-transparent text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Grid or Loading */}
        <div className="grid place-items-center min-h-[200px] px-3 sm:px-0 pb-10">
          {loading ? (
            // 🔄 Fallback Loading Animation
            <div className="flex flex-col items-center gap-3">
              <div className="w-[100px] h-[100px] border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin">
                 <img src={LoadImg} alt="" />
              </div>
              <p className="text-gray-500 text-sm">Searching apps...</p>
             
            </div>
          ) : filteredApp.length === 0 ? (
            // No Results
            <AppErrorPage></AppErrorPage>
            
          ) : (
            //  App Cards Grid
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center w-full">
              {filteredApp.map((app) => (
              <AppCard key={app.id} app={app} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllApp;
