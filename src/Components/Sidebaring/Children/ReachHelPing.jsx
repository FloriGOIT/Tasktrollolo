import cactus from "./cactus.png"
import css from "../Children/Sidebar.module.css"

export const ReachHelPing = ({openHelpModal}) => 
    {return (<section className={css.reachHelpWrapperF}>
               <img src={cactus} alt="smal cactus"/ >
               <p className={css.infoHelpF}>If you need help with <strong>TaskPro</strong>, check out our support resources or reach out to our customer support team.</p>

                <button className={css.helpBtnF} onClick={openHelpModal}>
                        <span>❔</span>
                        <p>Need help?</p>
                </button>

             </section>)
    }