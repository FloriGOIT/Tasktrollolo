
import css from "../../Sidebaring/Children/Sidebar.module.css"
import { TfiPencil } from "react-icons/tfi";
import { IoTrashOutline } from "react-icons/io5";
import { LuFlower } from "react-icons/lu";
import { CiBasketball } from "react-icons/ci";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { FaArrowsToDot } from "react-icons/fa6";
import { FaBluesky } from "react-icons/fa6";
import { AiOutlineAntDesign } from "react-icons/ai";
import { MdWorkspaces } from "react-icons/md";
import { FaPhoenixFramework } from "react-icons/fa6";
import { useState } from "react";


export const ListOfBoardS = ({openModal, handleEditCreate, selection}) => {
  const setAction = (event) => { handleEditCreate(event.currentTarget.name); openModal();}
  const [selectedButton, setSelectedButton] = useState(100);
  
  const iconSeen = (icon) => {
    switch (icon) {
      case 'icon1':
        return <LuFlower id="icon1" />;
      case 'icon2':
        return <CiBasketball id="icon2" />;
      case 'icon3':
        return <BsBoundingBoxCircles id="icon3" />;
      case 'icon4':
          return <FaArrowsToDot id="icon4" />;
      case 'icon5':
          return <FaBluesky id="icon5" />;
      case 'icon6':
          return <AiOutlineAntDesign id="icon6" />;
      case 'icon7':
          return <MdWorkspaces id="icon7" />;
      case 'icon8':
            return <FaPhoenixFramework id="icon8" />;
      default:
        return null;
    }
  };
  
  const handleBTN = (event) =>{const x = event.target.closest('li').id; setSelectedButton(x); console.log(x)}

  return (
    <ul className={css.boardsListF} >

      {selection.map( (el, index) => { return (
        <li key={index} className={selectedButton === index ? "css.black" : ""} id={index} onClick={handleBTN}>
        <span className={css.namingBoardF}>
          <p> {iconSeen(el.icon)} </p>
          <p> {el.title} </p>
        </span>
        <span className={css.modifyBoardF}>
          <button name="Edit board" onClick={setAction}>
            <TfiPencil/>
          </button>
          <button>
            <IoTrashOutline />
          </button>
        </span>
      </li>
      )} )}
      

    </ul>
  );
};