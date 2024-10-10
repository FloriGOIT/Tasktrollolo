import React, { useState } from "react";
import { Sidebar } from "../../Components/Sidebaring/SidebaR";
import Header from "../../Components/header/Header";
import useUser from "../../hooks/useUser";
import Boards from "../../Components/Boards/Boards";
import "./Dashboard.module.css";

const Dashboard = () => {
  const [sidebarVisibility, setSidebarVisibility] = useState(true);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const { user, loading, error } = useUser();

  const handleSidebarVisibility = () => {
    setSidebarVisibility(!sidebarVisibility);
  };

  const handleSelectedBoard = (boardName) => {
    setSelectedBoard(boardName);
  };

  let sidebarID = sidebarVisibility ? "sidebarIsOpen" : "sidebarIsClosed";

  return (
    <div className="App" id={sidebarID}>
      <div className="sideBar">
        <Sidebar
          handleSidebarVisibility={handleSidebarVisibility}
          sidebarVisibility={sidebarVisibility}
          handleSelectedBoard={handleSelectedBoard}
        />
      </div>

      <div className="sharedlayoutF">
        <div className="navBar">
          {" "}
          <Header user={user} loading={loading} error={error} />
        </div>

        <div className="App-header">
          {selectedBoard ? (
            <Boards boardName={selectedBoard} />
          ) : (
            <p>Please select a board from the sidebar.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
