// _app.tsx
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import NavBar from "components/navbar";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { chains, provider, connectors } from "./wagmiConfig";

function MyApp({ Component, pageProps }: AppProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const queryClient = new QueryClient();

    return (
        <WagmiProvider provider={provider} connectors={connectors}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider chains={chains}>
                    <NavBar />
                    <Component {...pageProps} />
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}

export default MyApp;
