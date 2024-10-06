


import css from "../../Sidebaring/Children/Sidebar.module.css"
import { AddBoard } from "../Children/AddBoard"

export const CreateBoarD = ({openModal, handleEditCreate}) =>
{
return(
      <div className={css.creatBoardF} >
        <h4>Create a new board</h4>
        <AddBoard openModal={openModal} handleEditCreate={handleEditCreate} />
      </div>
)
}