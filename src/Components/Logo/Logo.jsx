import LogoIcon from "../../images/icon.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={LogoIcon} alt="logo" className={styles.logo} />
      <span className={styles.text}>Task Pro</span>
    </div>
  );
};

export default Logo;
