
import css from "../Sidebaring/Children/Sidebar.module.css";
import { ListOfBoardS } from "../Sidebaring/Children/ListOfBoardS";
import { ReachHelPing } from "../Sidebaring/Children/ReachHelPing";
import { LogOuT } from "../Sidebaring/Children/LogOuT";
import { LogoSidebaR } from "../Sidebaring/Children/LogoSidebaR";
import { CreateBoarD } from "../Sidebaring/Children/CreateBoarD";
import {BoardModaL} from "../Sidebaring/Children/BoardModaL";
import {HelpModaL} from "../Sidebaring/Children/HelpModaL";
import { useState } from "react";



export const SidebaR = ({handleSidebarVisibility, sidebarVisibility}) => {
  const [isboardmodalopen, setisboardmodalopen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isEditCreat, setIsEditCreate ]= useState("")
  
  const [selectedIcon, setSelectedIcon] = useState();
  const handleIconSelect = (icon) => {setSelectedIcon(icon)}; // Set the selected icon in state};

  
  const openModal = () => setisboardmodalopen(!isboardmodalopen);
  const openHelpModal = () => setIsHelpModalOpen(!isHelpModalOpen);
  const handleEditCreate = (actionType) => {setIsEditCreate(actionType); console.log(actionType)}
  
  return (
    <div className={css.sidebarF} >
      <div>
        <LogoSidebaR handleSidebarVisibility={handleSidebarVisibility} sidebarVisibility={sidebarVisibility}/>
        <section className={css.myBoardsF}>
          <h5>My boards</h5>
          <hr />
          <CreateBoarD openModal={openModal} handleEditCreate={handleEditCreate} />
          <BoardModaL openModal={openModal} isboardmodalopen={isboardmodalopen} isEditCreat={isEditCreat} handleIconSelect={handleIconSelect}/>
          <HelpModaL openHelpModal={openHelpModal} isHelpModalOpen={isHelpModalOpen} />
          <hr />
          <ListOfBoardS openModal={openModal} handleEditCreate={handleEditCreate} selectedIcon={selectedIcon}/>
        </section>
      </div>

      <div>
        <ReachHelPing openHelpModal={openHelpModal}/>
        <LogOuT />
      </div>

    </div>
  );
};
/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2m2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2 2 0 0 1 1.437-1.437V3.937A2 2 0 0 1 12.063 2.5H3.937A2 2 0 0 1 2.5 3.937M14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"></path></svg> */