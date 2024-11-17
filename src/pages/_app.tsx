// pages/_app.tsx
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiClient } from "config/wagmi";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import '../styles/globals.css';
import "styles/rainbowkit.css";
import { WagmiConfig } from "wagmi";
import Layout from "./layout"; // Import your new Layout
import PageTransition from "components/PageTransition";

function MyApp({ Component, pageProps }: AppProps) {
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);

  //   // Disable right-click
  //   const handleContextMenu = (e: MouseEvent) => e.preventDefault();
  //   document.addEventListener('contextmenu', handleContextMenu);

  //   // Disable common DevTools shortcuts
  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key))) {
  //       e.preventDefault();
  //     }
  //   };
  //   document.addEventListener('keydown', handleKeyDown);

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);

  // if (!mounted) return null;

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout>
        <PageTransition>
          <Component {...pageProps} />
          </PageTransition>
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
