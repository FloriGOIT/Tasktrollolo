
import { createPortal } from "react-dom";
import css from "./Sidebar.module.css";
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



//import pic1Desk from "./SVGs/pic1Desk.png"
//import pic1Tablet from "./SVGs/pic1Tablet.png"
import pic1Mob from "./SVGs/pic1Mob.jpg"
//import pic4Desk from "./SVGs/pic4Desk.png";
//import pic4Tablet from "./SVGs/pic4Tablet.png";
import pic4Mob from "./SVGs/pic4Mob.jpg";
//import pic5Desk from "./SVGs/pic5Desk.png"
//import pic5Tablet from "./SVGs/pic5Tablet.png"
import pic5Mob from "./SVGs/pic5Mob.jpg"
import noImage from "./SVGs/noImage.jpg"


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

  const imageArr = [{name:"noImage", alt:"no image"},
    {name:"pic1Mob", alt:"pink tree on a lake"},
    {name:"pic4Mob", alt:"blue sky"},
    {name:"pic5Mob", alt:"blue-viollet AI planets"}];
  const imageComponents ={noImage:noImage, pic1Mob:pic1Mob, pic4Mob:pic4Mob, pic5Mob:pic5Mob}

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