import { CustomConnectLogin } from "../components/ConnectWallet/login";
import styles from "../styles/login.module.css";

const LoginPage = () => {
  return (
    <div className={styles["login-page"]}>
                {/* Logo */}
                <div className={styles["logo-container"]}>
          <img
            src="/blue-alexa.png"
            alt="Logo"
            className={styles.logo}
          />
        </div>
      <div className={styles["login-container"]}>


        {/* Login Form */}
        <div className={styles["login-form"]}>
          <CustomConnectLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
