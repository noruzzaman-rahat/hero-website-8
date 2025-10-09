import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { getFromLocalStorage } from "../Utilities/AddToLocalStorage";
import useAppData from "../Hooks/useAppData";
import InstalledCard from "./InstalledCard";

const Instalation = () => {
  const { appData } = useAppData();
  const [installedApp, setInstalledApp] = useState([]);
  const [sort, setSort] = useState("none");
  const [dropdownOpen, setDropdownOpen] = useState(false); // Control dropdown

  useEffect(() => {
    const savedAppLocal = getFromLocalStorage() || [];

    if (!savedAppLocal.length || !appData || !appData.length) return;

    const filteredApp = appData.filter((app) =>
      savedAppLocal.map(Number).includes(app.id)
    );

    setInstalledApp(filteredApp);
  }, [appData]);

  const handleSort = (type) => {
    setSort(type);
    let sortedApp = [...installedApp];
    if (type === "size") {
      sortedApp.sort((a, b) => a.size - b.size);
    } else if (type === "rating") {
      sortedApp.sort((a, b) => b.ratingAvg - a.ratingAvg);
    }
    setInstalledApp(sortedApp);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const handleUninstallApp = (id) => {
    setInstalledApp((prev) => prev.filter((app) => app.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#e9e9e9]">
      <Container>
        <div className="py-10 space-y-2">
          <h1 className="text-3xl font-bold text-center">Your Installed Apps</h1>
          <p className="text-center">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Sort Section */}
        <div className="my-8 px-3 flex justify-between items-center">
          <div className="text-xl font-semibold">
            <p>({installedApp.length}) App{installedApp.length !== 1 ? "s" : ""} Found</p>
          </div>

          <div className="relative inline-block text-left">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sort by: {sort.charAt(0).toUpperCase() + sort.slice(1)}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <li
                  onClick={() => handleSort("rating")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white cursor-pointer"
                >
                  Ratings: High to Low
                </li>
                <li
                  onClick={() => handleSort("size")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white cursor-pointer"
                >
                  Size: Low to High
                </li>
                <li
                  onClick={() => handleSort("none")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white cursor-pointer"
                >
                  None
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Installed Apps */}
        <div>
          {installedApp.map((app) => (
            <InstalledCard
              key={app.id}
              app={app}
              onUninstall={handleUninstallApp}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Instalation;
