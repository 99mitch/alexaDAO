import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';

const Staking: React.FC = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Staking Page</h1>
            <p>Welcome to the Staking page. Here you can stake your tokens.</p>
            <ConnectButton></ConnectButton>
        </div>
    );
};

export default Staking;
