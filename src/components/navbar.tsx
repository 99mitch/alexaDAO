import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/outline'; // Assuming heroicons are installed
import styles from '../styles/Navbar.module.css';
import { useAccount } from 'wagmi'; // Using wagmi for wallet connection
import { CustomConnect } from './ConnectWallet';

const Navbar: React.FC = () => {
  const router = useRouter();
  const { address, isConnected } = useAccount();

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <img src="/alexa.png" alt="Logo" />
        </Link>
      </div>

      {/* Search Bar with Dropdown */}
      <div className={styles.searchBar}>
        <select
          onChange={(e) => router.push(e.target.value)}
          className={styles.dropdown}
        >
          <option value="/">All</option>
          <option value="/home">Home</option>
          <option value="/staking">Staking</option>
          <option value="/bonds">Bonds</option>
          <option value="/chatbot">Chatbot</option>
          <option value="https://docs.kibuonbase.com/">Docs</option>
        </select>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>

      {/* Account Links and Cart */}
      <div className={styles.accountCart}>
        {/* User Address or Sign In */}
        <div className={styles.account}>
          <UserIcon className={styles.icon} />
          <span>Hello, {isConnected ? address : "Sign In"}</span>
        </div>

        <div className={styles.assistant}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.botIcon} // Add a class to control the icon size
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
          <span>IA Assistant</span>
        </div>

        <CustomConnect></CustomConnect>
      </div>
    </nav>
  );
};

export default Navbar;