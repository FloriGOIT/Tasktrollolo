import './App.css';
import { Sidebar } from './Components/Sidebaring/SidebaR';
import { useState } from 'react';

function App() {
  
  const [sidebarVisibility, setSidebarVisibility] = useState(true)
  const handleSidebarVisibility = () => {setSidebarVisibility(!sidebarVisibility)}
  let sidebarID = sidebarVisibility ? "sidebarIsOpen" : "sidebarIsClosed";
  return ( 
    <div className="App" id={sidebarID}>
      <Sidebar handleSidebarVisibility={handleSidebarVisibility} sidebarVisibility={sidebarVisibility}/>  
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

