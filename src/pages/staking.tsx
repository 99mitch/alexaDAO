import React, { useState } from "react";
import styles from "../styles/staking.module.css";

const StakingPage: React.FC = () => {
  const [activeAction, setActiveAction] = useState("stake"); // Default to "stake"

  // Function to handle button click
  const handleActionClick = (action: string) => {
    setActiveAction(action);
  };

  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <img
          src="/alexa.gif" // Replace with your actual image path
          alt="Staking Graphic"
          className={styles.imagePreview}
        />
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <h1 className={styles.title}>Stake Your $ALXA Tokens</h1>
        <div className={styles.rating}>0 Compound streak</div>
        <div className={styles.metric}>
          <span className={styles.price}>$ALXA Staked: 0$</span>
          <span className={styles.apr}>APR: 492.07%</span>
        </div>

        {/* Action Buttons */}
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.button} ${
              activeAction === "stake" ? styles.activeButton : ""
            }`}
            onClick={() => handleActionClick("stake")}
          >
            Stake
          </button>
          <button
            className={`${styles.button} ${
              activeAction === "unstake" ? styles.activeButton : ""
            }`}
            onClick={() => handleActionClick("unstake")}
          >
            Unstake
          </button>
          <button
            className={`${styles.button} ${
              activeAction === "compound" ? styles.activeButton : ""
            }`}
            onClick={() => handleActionClick("compound")}
          >
            Compound
          </button>
          <button
            className={`${styles.button} ${
              activeAction === "claim" ? styles.activeButton : ""
            }`}
            onClick={() => handleActionClick("claim")}
          >
            Claim Rewards
          </button>
        </div>

        {/* Input Section */}
        {activeAction === "stake" ? (
            <div className={styles.inputSection}>
            <input
              type="text"
              placeholder="Enter amount"
              className={styles.input}
            />
            <button className={styles.maxButton}>MAX</button>
            <button
              className={styles.depositButton}
              onClick={() => console.log("Deposit function called")}
            >
              Deposit
            </button>
          </div>
        ) : (
          <div
            className={`${styles.inputSection} ${styles.centeredInputSection}`}
          >
            <button
              className={styles.maxButton}
              onClick={() => console.log(`${activeAction} function called`)}
            >
              {activeAction === "unstake" && "Unstake Tokens"}
              {activeAction === "compound" && "Compound Rewards"}
              {activeAction === "claim" && "Claim Rewards"}
            </button>
          </div>
        )}

        {/* Details Section */}
        <div className={styles.details}>
          <h3>Product Details</h3>
          <p>
            Stake your tokens to earn rewards. Manage your staked balance,
            compound your rewards, claim rewards, and grow your portfolio
            efficiently.
          </p>
          <p>
            <strong>ALXA Balance:</strong> 0 $ALXA
            <br />
            <strong>Staked Balance:</strong> 0 $ALXA
            <br />
            <strong>Claimable Rewards:</strong> 0 $ALXA
          </p>
        </div>
        <div className={styles.details}>
          <h3>Epoch Infos</h3>
          <p>4 Hours, 56 Mins to Next Epoch</p>
          <p>
            <strong>Next Epoch Yield:</strong> 0.33703%
            <br />
            <strong>Next Epoch Reward:</strong> 0 $ALXA
            <br />
            <strong>Daily Rewards:</strong> 0 $ALXA
          </p>
        </div>
      </div>
    </div>
  );
};

export default StakingPage;
