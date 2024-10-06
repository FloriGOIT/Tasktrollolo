import { useNavigate } from "react-router-dom";
import startImg from "../../images/Image-desktop.png";
import Logo from "../../Components/Logo/Logo";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className={styles.container}>
      <img
        src={startImg}
        alt="boy looking at laptop"
        className={styles.image}
      />
      <Logo />
      <span className={styles.description}>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </span>
      <a onClick={handleRegisterClick} className={styles.registerButton}>
        Registration
      </a>
      <a onClick={handleLoginClick} className={styles.loginButton}>
        Log In
      </a>
    </div>
  );
};

export default Home;
