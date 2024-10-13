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
  const [listOfBoards, setListOfBoards] = useState([])

  const handleSidebarVisibility = () => {
    setSidebarVisibility(!sidebarVisibility);
  };

  const handleSelectedBoard = (boardName) => {
    setSelectedBoard(boardName);
  };
  const handleListOfBoards = (list) =>
  {setListOfBoards(list)}
 
  let sidebarID = sidebarVisibility ? "sidebarIsOpen" : "sidebarIsClosed";

  let isBoardavailable = listOfBoards.some(board => board.title === selectedBoard)

  return (
    <div className="App" id={sidebarID}>
      <div className="sideBar">
        <Sidebar
          handleSidebarVisibility={handleSidebarVisibility}
          sidebarVisibility={sidebarVisibility}
          handleSelectedBoard={handleSelectedBoard}
          handleListOfBoards={handleListOfBoards}
        />
      </div>

      <div className="sharedlayoutF">
        <div className="navBar">
          {" "}
          <Header user={user} loading={loading} error={error} />
        </div>

        <div className="App-header">
          {selectedBoard && isBoardavailable ? (
            <Boards boardName={selectedBoard} />
          ) : (
            <p>Please select a board from the sidebar.</p> // Render message if no valid board is selected
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
