import React, { useState } from "react";
import { Sidebar } from "../../Components/Sidebaring/SidebaR";
import Header from "../../Components/header/Header";
import useUser from "../../hooks/useUser";

const Dashboard = () => {
  const [sidebarVisibility, setSidebarVisibility] = useState(true);
  const { user, loading, error } = useUser();

  const handleSidebarVisibility = () => {
    setSidebarVisibility(!sidebarVisibility);
  };

  let sidebarID = sidebarVisibility ? "sidebarIsOpen" : "sidebarIsClosed";

  return (
    <div className="App" id={sidebarID}>
      <Sidebar
        handleSidebarVisibility={handleSidebarVisibility}
        sidebarVisibility={sidebarVisibility}
      />

      <div className="sharedlayoutF">
        <Header user={user} loading={loading} error={error} />
        <div className="selectedBoardF">
          <div className="App-header"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
