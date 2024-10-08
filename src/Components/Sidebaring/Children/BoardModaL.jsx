
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


export const BoardModaL = ({ openModal, isboardmodalopen, isEditCreat, handleNewBoard, selection, setSelection, selectedBoard }) => {
  const [newSelection, setNewSelection] = useState({ title: "", icon: "", image: "" });

  if (!isboardmodalopen) return null; // Don't render anything if not open

  const handleBoardTitle = (event) => {
    const title = event.target.value;
    setNewSelection((previous) => ({ ...previous, title }));
  };

  const handleSelectIcon = (event) => {
    const icon = event.target.closest('svg').id;
    setNewSelection((previous) => ({ ...previous, icon }));
    console.log("icon", icon);
  };

  const handleSelectImg = (event) => {
    const image = event.target.id;
    setNewSelection((previous) => ({ ...previous, image }));
    console.log("image", image);
  };


  const handleSaveBtn = (event) => {
    event.preventDefault();
    if(isEditCreat === "Create board")
      { if(newSelection.icon === ""){alert("Please select an icon"); return}
        else if(newSelection.image === ""){alert("Please select an image"); return}
        console.log(newSelection);
        if(selection.some(board => board.title === newSelection.title)) {alert("The title is already in use");}
        else{handleNewBoard(newSelection); setNewSelection({ title: "", icon: "", image: "" }); openModal();}      
    }
    else if(isEditCreat === "Edit board")
      { if(newSelection.icon === ""){alert("Please select an icon"); return}
    else if(newSelection.image === ""){alert("Please select an image"); return}
        // Update the existing board
        const index = selection.findIndex(board => board.title === selectedBoard);
        
        if (index !== -1) {
          const updatedSelection = [...selection]; // Create a copy of the selection
          updatedSelection[index] = { ...updatedSelection[index], ...newSelection }; // Update the specific board
          
          // Assuming you have a function to update the selection in the parent component
          setSelection(updatedSelection);
          
          openModal();
          setNewSelection({ title: "", icon: "", image: "" }) // Close modal after editing
        } else {
          console.log("Board not found for editing");
        }
      }
  };

  return createPortal(
    <form className={css.boardDetailsModalF} onSubmit={handleSaveBtn}>
      <button type="button" className={css.closingButtonF} onClick={openModal}>
        <IoMdClose />
      </button>
      <p>{isEditCreat}</p>
      <label htmlFor="boardTitleF">Board Title:</label>
      <input
        type="text"
        id="boardTitleF"
        name="boardTitleF"
        placeholder="Enter board title"
        onChange={handleBoardTitle}
        value={newSelection.title}
        required // Ensures the field is filled before submission
      />
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

      <div className={css.boardImageF} onClick={handleSelectImg}>
        <CiImageOff id="img1" />
        <img src={pinkTreeDesk} alt="pink tree on a lake" id="img2" />
        <img src={skyCloudDesk} alt="one big cloud on blue sky" id="img3" />
        <img src={aiPlanetsDesk} alt="blue-viollet planets" id="img4" />
      </div>

      <button type="submit" className={css.saveButtonF}>
        <FaPlus />
        <p>Save</p>
      </button>
    </form>,
    document.body // Render the modal to the body
  );
};