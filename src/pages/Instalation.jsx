import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { getFromLocalStorage } from "../Utilities/AddToLocalStorage";
import useAppData from "../Hooks/useAppData";
import InstalledCard from "./InstalledCard";

const Instalation = () => {
  const { appData } = useAppData();
  const [installedApp, setInstalledApp] = useState([]);
  const [sort, setSort] = useState("none");

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
  };
  const handleUninstallApp = (id) => {
    setInstalledApp((prev) => prev.filter((app) => app.id !== id));
  };
  return (
    <div className="bg-[#e9e9e9] min-h-screen">
      <Container>
        <div className="py-10 space-y-2">
          <h1 className="text-3xl font-bold text-center">All Instaled Apps</h1>
          <p className="text-center">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div>
          <div className="my-8 px-3 flex justify-between items-center">
            <div className="text-xl font-semibold">
              <p>({installedApp.length}) App Founded</p>
            </div>
            <div>
              <details className="dropdown">
                <summary className="btn m-1 w-34">sort by: {sort} </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 space-y-3 w-36 p-2 shadow-sm">
                  <li
                    onClick={() => handleSort("rating")}
                    className="hover:cursor-pointer"
                  >
                    Ratings
                  </li>
                  <li
                    onClick={() => handleSort("size")}
                    className="hover:cursor-pointer"
                  >
                    Size
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div>
          {installedApp.map((app) => (
            <InstalledCard 
            key={app.id} 
            app={app}
            onUninstall={handleUninstallApp}
            ></InstalledCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Instalation;
