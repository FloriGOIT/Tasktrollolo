
import { createPortal } from "react-dom";
import css from "../../Sidebaring/Children/Sidebar.module.css"
import { LuFlower } from "react-icons/lu";
import { CiBasketball } from "react-icons/ci";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { FaArrowsToDot } from "react-icons/fa6";
import { FaBluesky } from "react-icons/fa6";
import { AiOutlineAntDesign } from "react-icons/ai";
import { MdWorkspaces } from "react-icons/md";
import { FaPhoenixFramework } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { CiImageOff } from "react-icons/ci";
import {  useState } from "react";

import aiPlanetsDesk from "./SVGs/aiPlanets-desk.jpg"
import pinkTreeDesk from "./SVGs/pinkTree-desk.jpg"
import skyCloudDesk from "./SVGs/skyCloud-desk.jpg"


  export const BoardModaL = ({ openModal, isboardmodalopen, isEditCreat, handleNewBoard}) => {
  const [selection, setSelection] = useState([{title:"", icon: "", image:""}])
  if (!isboardmodalopen) return null; // Don't render anything if not open

  const handleSelectIcon = (event) => {const icon = event.target.closest('svg').id; setSelection( (previous) => ({...previous, icon}) ); console.log("icon", icon)}
  const handleSelectImg = (event) => {const image = event.target.id; setSelection( previous => ({...previous, image }) ); console.log("image", image)}
  const handleBoardTitle =  (event) => { const title =  event.target.value; setSelection( previous => ({...previous, title}) )}
  const handleSaveBtn = () => {console.log(selection); handleNewBoard(selection); openModal()}
  
  return createPortal(
    <div className={css.boardDetailsModalF}>
      <button className={css.closingButtonF} onClick={openModal}>
        <IoMdClose />
        
      </button>
      <p>{isEditCreat}</p>
      <input type="text" name="boardTitleF" placeholder="Enter board title" onChange={handleBoardTitle} value={selection.title} />
      <p>Icons</p>

      <div className={css.boardIconsF} onClick={handleSelectIcon}>
        <LuFlower id="icon1" />
        <CiBasketball id="icon2" />
        <BsBoundingBoxCircles id="icon3" />
        <FaArrowsToDot id="icon4" />
        <FaBluesky id="icon5" />
        <AiOutlineAntDesign id="icon6" />
        <MdWorkspaces id="icon7" />
        <FaPhoenixFramework id="icon8" />
      </div>

      <p>Background</p>

      <div className={css.boardImageF} onSubmit={handleSelectImg}>
        <CiImageOff id="img1"/>
        <img src={pinkTreeDesk} alt="pink tree on a lake" id="img2"/>
        <img src={skyCloudDesk} alt="one big cloud on blue sky" id="img3"/>
        <img src={aiPlanetsDesk} alt="blue-viollet planets" id="img4" />
      </div>

      <span className={css.saveButtonF} onClick={handleSaveBtn}>
        <FaPlus />
        <p >Save</p>
      </span>
    </div>,
    document.body // Render the modal to the body
  );
};