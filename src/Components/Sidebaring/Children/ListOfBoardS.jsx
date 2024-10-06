
import css from "./Sidebar.module.css";
import { TfiPencil } from "react-icons/tfi";
import { IoTrashOutline } from "react-icons/io5";
import { LuFlower } from "react-icons/lu";



export const ListOfBoardS = ({openModal, handleEditCreate, selectedIcon}) => {
  const setAction = (event) => { handleEditCreate(event.currentTarget.name); openModal();}
  const boardsArrr = { icon: <LuFlower />, name: "My first board" };

  return (
    <ul className={css.boardsListF}>
      <li className={css.listBoardItemF}>
        <span className={css.namingBoardF}>
          <p>{boardsArrr.icon}</p>
          <p> {boardsArrr.name}</p>
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

    </ul>
  );
};