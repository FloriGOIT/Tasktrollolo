

import css from "../../Sidebaring/Children/Sidebar.module.css"
import { TbLogout } from "react-icons/tb";


export const LogingOut = () => {
        return(
              <div className={css.logOutF}>
                <button>
                  <TbLogout/>
                </button>
                <p>Log Out</p>
              </div>
        )
}