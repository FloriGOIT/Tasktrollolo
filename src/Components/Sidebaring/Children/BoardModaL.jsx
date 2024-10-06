
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

import noImg from "../../Sidebaring/Children/SVGs/noImg.jpg"
import pic1MobTree from "../../Sidebaring/Children/SVGs/pic1MobTree.jpg"
import pic4MobSky from "../../Sidebaring/Children/SVGs/pic4MobSky.jpg"
import pic5MobPlanets from "../../Sidebaring/Children/SVGs/pic5MobPlanets.jpg"




  export const BoardModaL = ({ openModal, isboardmodalopen, isEditCreat, handleIconSelect}) => {
  if (!isboardmodalopen) return null; // Don't render anything if not open

  const iconsArr = [

    "LuFlower", 
    "CiBasketball", 
    "BsBoundingBoxCircles", 
    "FaArrowsToDot", 
    "FaBluesky", 
    "AiOutlineAntDesign", 
    "MdWorkspaces", 
    "FaPhoenixFramework"
  ];
  const iconComponents = {

    LuFlower: LuFlower,
    CiBasketball: CiBasketball,
    BsBoundingBoxCircles: BsBoundingBoxCircles,
    FaArrowsToDot: FaArrowsToDot,
    FaBluesky: FaBluesky,
    AiOutlineAntDesign: AiOutlineAntDesign,
    MdWorkspaces: MdWorkspaces,
    FaPhoenixFramework: FaPhoenixFramework,
  };

  const imageArr = [{name:"noImg", alt:"no image"},
    {name:"pic1MobTree", alt:"pink tree on a lake"},
    {name:"pic4MobSky", alt:"blue sky"},
    {name:"pic5MobPlanets", alt:"blue-viollet AI planets"}];
  const imageComponents ={noImg:noImg, pic1MobTree:pic1MobTree, pic4MobSky:pic4MobSky, pic5MobPlanets:pic5MobPlanets}

  const handleImageicon = (event) => {console.log("eventttt", event.currentTarget); }
  
  return createPortal(
    <div className={css.boardDetailsModalF}>
      <button className={css.closingButtonF} onClick={openModal} >
        < IoMdClose />
      </button>
      <p>{isEditCreat}</p>
      <input type="text" name="boardTitleF" placeholder="Enter board title" />
      <p>Icons</p>

      <ul className={css.boardIconsF}>
        {iconsArr.map((iconName, index) => {
            const IconComponent = iconComponents[iconName]
          return(<li key={index}><button name={iconName} ><IconComponent onClick={handleImageicon}/></button></li>)})}
      </ul>

      <p>Background</p>

      <ul className={css.boardImageF}>

        {imageArr.map((image, index)=>{
          const Image = imageComponents[image.name]
          return(<li key={index}><button name={image.name} ><img src={Image} alt={image.alt} /></button></li>)})}
      </ul>
      <span className={css.saveButtonF}> 
        <FaPlus/>
        <p>Save</p>
      </span>
    </div>,
    document.body // Render the modal to the body
  );
};