
 
import css from "../../Sidebaring/Children/Sidebar.module.css"
import { FaPlus } from "react-icons/fa";

export const AddButtoN = ({openModal, handleEditCreate}) =>
{ 
  const setAction = (event) => { console.log("event: ", event.currentTarget.name); 
    handleEditCreate(event.currentTarget.name)
    openModal();
  }
  
 return(
 <>
        <button className={css.addBoardBtnF}  onClick={setAction} name="Create board"  >
          <FaPlus className={css.icontPlus} />
        </button>
 </>
 )}