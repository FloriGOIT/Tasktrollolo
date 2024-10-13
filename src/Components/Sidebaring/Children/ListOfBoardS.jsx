
import css from "../../Sidebaring/Children/Sidebar.module.css";
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

export const ListOfBoardS = ({
  openModal,
  handleEditCreate,
  selection,
  setSelection,
  handleSelectedBoard,
}) => {
 
  const [selectedBoard, setSelectedBoard] = useState("");
  const setAction = (event) => {
    handleEditCreate(event.currentTarget.name);
    openModal();
    handleSelectedBoard(event.target.closest("li").id);

  };

  const iconSeen = (icon) => {
    switch (icon) {
      case "icon1":
        return <LuFlower id="icon1" />;
      case "icon2":
        return <CiBasketball id="icon2" />;
      case "icon3":
        return <BsBoundingBoxCircles id="icon3" />;
      case "icon4":
        return <FaArrowsToDot id="icon4" />;
      case "icon5":
        return <FaBluesky id="icon5" />;
      case "icon6":
        return <AiOutlineAntDesign id="icon6" />;
      case "icon7":
        return <MdWorkspaces id="icon7" />;
      case "icon8":
        return <FaPhoenixFramework id="icon8" />;
      default:
        return null;
    }
  };

  const handleBTN = (event) => {
    const boardId = event.target.closest('li').id;
    setSelectedBoard(boardId) // Setează board-ul selectat
    handleSelectedBoard(boardId);
  }
  const handleListAfterDel = (event) => {
    event.stopPropagation();
    const boardName = event.target.closest('li').id;
    const newList = selection.filter(board => board.title !== boardName);
    setSelection(newList)

  }
  
 
  return (
    <ul className={css.boardsListF}>
      {selection.map((el, index) => (
        <li 
          key={index} 
          id={el.title} 
          onClick={handleBTN}
          className={selectedBoard === el.title  ? css.activeBoard : ""} // Aplica clasa activă dacă board-ul este selectat
        >
          <div className={css.namingBoardF}>
            <p>{iconSeen(el.icon)}</p>
            <p>{el.title}</p>
          </div>
          <div className={css.modifyBoardF}>
            <button name="Edit board" onClick={setAction}>
              <TfiPencil/>
            </button>
            <button onClick={handleListAfterDel}>
              <IoTrashOutline />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};