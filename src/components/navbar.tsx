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
          <span>Hello, {isConnected ? address : 'Sign In'}</span>
        </div>

        {/* AI Assistant Section */}
        <div className={styles.assistant}>
          <span>IA Assistant</span>
        </div>


          <CustomConnect></CustomConnect>
        </div>
    </nav>
  );
};

export default Navbar;
