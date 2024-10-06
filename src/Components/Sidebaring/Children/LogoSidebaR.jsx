import { AiFillThunderbolt } from "react-icons/ai";
import css from "./Sidebar.module.css";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export const LogoSidebaR = ({ handleSidebarVisibility, sidebarVisibility }) => {
  return (
    <aside className={css.logoWrapperF}>
      <span className={css.logoF}>
        <AiFillThunderbolt className={css.thunderIconF} />
        <h3>Task Pro</h3>
      </span>

      {sidebarVisibility ? (
        <button
          className={css.sidebarVisibilityF}
          id={css.closeSidebarBtn}
          onClick={handleSidebarVisibility}
        >
          <IoChevronForwardCircleOutline />
        </button>
      ) : (
        <button
          className={css.sidebarVisibilityF}
          id={css.openSidebarBtn}
          onClick={handleSidebarVisibility}
        >
          <IoChevronBackCircleOutline />
        </button>
      )}
    </aside>
  );
};