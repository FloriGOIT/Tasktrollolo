import { createPortal } from "react-dom";
import css from "../../Sidebaring/Children/Sidebar.module.css";
import { IoMdClose } from "react-icons/io";
export const HelpModaL = ({ openHelpModal, helpFormData, setHelpFormData }) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent default form submission
    const email = event.target.elements.email.value;
    const comment = event.target.elements.comment.value;
    setHelpFormData(previous => [...previous, {email, comment}]);
    console.log("helpFormData",helpFormData);
    console.log("email||comment: ", { email, comment });
    openHelpModal();
  };
   

  return createPortal(
    <section className={css.helpModalF}>
      <button
        className={css.closingButtonF}
        onClick={openHelpModal}
      >
        <IoMdClose />
      </button>
      <form onSubmit={handleSubmit}>
        <p>Need help</p>
        <input type="email" name="email" placeholder="Your email address..." required/>
        <textarea type="text" name="comment" placeholder="Your comment..." required/>
        <button className={css.sendHelp} type="submit">
          <p>Send</p>
        </button>
      </form>
    </section>,
    document.body // Render the modal to the body
  );
};
