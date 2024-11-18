import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ShoppingCartIcon } from "@heroicons/react/outline"; // Import the cart icon

export const CustomConnect = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <ShoppingCartIcon
              className="h-6 w-6 text-white"
              style={{ color: "white" }}
            />
            {/* Always show the cart icon */}

            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "none",
                      border: "1px solid white",
                      borderRadius: "8px",
                      padding: "8px 15px",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "none",
                      color: "white",
                    }}
                  >
                    <span style={{ marginLeft: "8px" }}>Wrong network</span>
                  </button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <button
                    onClick={openAccountModal}
                    type="button"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "none",
                      marginLeft: "10px",
                      marginRight: "10px",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        fontSize: "0.8vw",
                      }}
                    >
                      {account.displayBalance
                        ? `${account.displayBalance}`
                        : ""}
                    </span>
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export const BasicConnect = () => {
  return <ConnectButton />;
};
