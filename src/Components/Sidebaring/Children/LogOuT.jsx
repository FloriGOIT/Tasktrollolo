

import css from "./Sidebar.module.css"
import { TbLogout } from "react-icons/tb";


export const LogOut = () => {
        return(
              <div className={css.logOutF}>
                <button>
                  <TbLogout/>
                </button>
                <p>Log Out</p>
              </div>
        )
}