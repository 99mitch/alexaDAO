import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <img src="/alexa.png" alt="Logo" className={styles.logo} />
        <div className={styles.socials}>
          <a
            href="https://x.com/AlexaDAO_eth"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialButton}
          >
            <img src="/X.png" alt="Facebook" className={styles.socialIcon} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialButton}
          >
            <img src="/tg.png" alt="Twitter" className={styles.socialIcon} />
          </a>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.linkColumn}>
          <h4>Amazon Music</h4>
          <p>Stream millions of songs</p>
        </div>
        <div className={styles.linkColumn}>
          <h4>Amazon Ads</h4>
          <p>Reach customers wherever they spend their time</p>
        </div>
        <div className={styles.linkColumn}>
          <h4>6pm</h4>
          <p>Score deals on fashion brands</p>
        </div>
        <div className={styles.linkColumn}>
          <h4>AbeBooks</h4>
          <p>Books, art & collectibles</p>
        </div>
        <div className={styles.linkColumn}>
          <h4>ACX</h4>
          <p>Audiobook Publishing Made Easy</p>
        </div>
        <div className={styles.linkColumn}>
          <h4>Sell on Amazon</h4>
          <p>Start a Selling Account</p>
        </div>
        <div className={styles.linkColumn}>
          <h4>Veeqo</h4>
          <p>Shipping Software Inventory Management</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
