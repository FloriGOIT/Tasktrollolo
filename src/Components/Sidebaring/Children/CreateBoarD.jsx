


import css from "./Sidebar.module.css"
import { AddButtoN } from "./AddButtoN.jsx"

export const CreateBoarD = ({openModal, handleEditCreate}) =>
{
return(
      <div className={css.creatBoardF} >
        <h4>Create a new board</h4>
        <AddButtoN openModal={openModal} handleEditCreate={handleEditCreate} />
      </div>
)
}