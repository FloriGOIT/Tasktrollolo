
import css from "../Sidebaring/Children/Sidebar.module.css";
import { ListOfBoardS } from "../Sidebaring/Children/ListOfBoardS";
import { ReachHelPing } from "../Sidebaring/Children/ReachHelPing";
import { LogingOut } from "./Children/LogingOuT";
import { LogoSidebaR } from "../Sidebaring/Children/LogoSidebaR";
import { CreateBoarD } from "../Sidebaring/Children/CreateBoarD";
import {BoardModaL} from "../Sidebaring/Children/BoardModaL";
import {HelpModaL} from "../Sidebaring/Children/HelpModaL";
import { useState } from "react";



export const Sidebarrr = ({handleSidebarVisibility, sidebarVisibility}) => {
  const [isboardmodalopen, setisboardmodalopen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isEditCreat, setIsEditCreate ]= useState("")
  const [selection, setSelection] = useState([])
    
  const openModal = () => setisboardmodalopen(!isboardmodalopen);
  const openHelpModal = () => setIsHelpModalOpen(!isHelpModalOpen);
  const handleEditCreate = (actionType) => {setIsEditCreate(actionType); console.log(actionType)}
  const handleNewBoard = (newBoard) => {
    setSelection(previous => [...selection, newBoard]); console.log("selection",selection)
     // Optionally close the modal after saving
  };


  
  return (
    <div className={css.sidebarF} >
      <div>
        <LogoSidebaR handleSidebarVisibility={handleSidebarVisibility} sidebarVisibility={sidebarVisibility}/>
        <section className={css.myBoardsF}>
          <h5>My boards</h5>
          <hr />
          <CreateBoarD openModal={openModal} handleEditCreate={handleEditCreate} />
          <hr />
          {selection !== "" ? <ListOfBoardS openModal={openModal} handleEditCreate={handleEditCreate} selection={selection}/> : null}
        </section>
      </div>
      <div>
          <ReachHelPing openHelpModal={openHelpModal}/>
          <LogingOut/>
          <BoardModaL openModal={openModal} isboardmodalopen={isboardmodalopen} isEditCreat={isEditCreat} handleNewBoard={handleNewBoard} />
          <HelpModaL openHelpModal={openHelpModal} isHelpModalOpen={isHelpModalOpen} />
      </div>
    </div>
  );
};
