


import { createPortal } from "react-dom";
import css from "../../Sidebaring/Children/Sidebar.module.css";
import { IoMdClose } from "react-icons/io";


export const HelpModaL = ({ openHelpModal, isHelpModalOpen }) => {
  if (!isHelpModalOpen) return null; // Don't render anything if not open

  return createPortal(
<section className={css.helpModalF}>
      <button className={css.closingButtonF} onClick={openHelpModal} isHelpModalOpen={isHelpModalOpen}>
        < IoMdClose />
      </button>
      <form >
                <p>Need help</p>
                <input type="text" />
                <textarea type="text" />
                <button className={css.sendHelp}>
                        <p>Send</p></button>
      </form>
</section>,
    document.body // Render the modal to the body
  );
};