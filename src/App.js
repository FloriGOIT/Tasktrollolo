import './App.css';
import { SidebaR } from "../src/Components/Sidebaring/SidebaR";
import { useState } from 'react';

function App() {
  
  const [sidebarVisibility, setSidebarVisibility] = useState(true)
  const handleSidebarVisibility = () => {setSidebarVisibility(!sidebarVisibility)}
  let sidebarID = sidebarVisibility ? "sidebarIsOpen" : "sidebarIsClosed";
  return ( 
    <div className="App" id={sidebarID}>
      <SidebaR handleSidebarVisibility={handleSidebarVisibility} sidebarVisibility={sidebarVisibility}/>  
      <div className="sharedlayoutF">
        <div className="topBarF" >sharedlayout top</div>
        <div className="selectedBoardF" >
          <div className="App-header">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

