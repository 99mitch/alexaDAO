import { CustomConnectLogin } from "../components/ConnectWallet/login";
import styles from "../styles/login.module.css";

const LoginPage = () => {
  return (
    <div className={styles["login-page"]}>
      <div className={styles["login-container"]}>
        {/* Logo */}
        <div className={styles["logo-container"]}>
          <img
            src="/alexa.gif"
            alt="Logo"
            className={styles.logo}
          />
        </div>

        {/* Login Form */}
        <div className={styles["login-form"]}>
          <CustomConnectLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
