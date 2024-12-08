import { ConnectButton } from "@rainbow-me/rainbowkit";

  const formatAddress = (address: string | undefined) => {
    if (!address) return '';
    return `${address.slice(0, 5)}...${address.slice(-5)}`;
  };

export const CustomConnectLogin = () => {
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
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                      display: "block",
                      textAlign: "center",
                      padding: "15px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      backgroundColor: "#eb9525",
                      borderRadius: "8px",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#febd69")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#eb9525")
                    }
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
                      width: "100%",
                      maxWidth: "300px",
                      display: "block",
                      textAlign: "center",
                      padding: "15px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      backgroundColor: "#dc3545",
                      borderRadius: "8px",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#c82333")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#dc3545")
                    }
                  >
                    Wrong Network
                  </button>
                );
              }
              return (
                <>
                  <button
                    onClick={openAccountModal}
                    type="button"
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                      display: "block",
                      textAlign: "center",
                      padding: "15px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      backgroundColor: "#FF9900",
                      borderRadius: "8px",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f3a847")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#FF9900")
                    }
                  >
                    Open Wallet
                  </button>
                  <div
                    style={{
                      textAlign: "left",
                      backgroundColor: "#fff",
                      padding: "20px",
                      maxWidth: "300px",
                      fontSize: "16px",
                      color: "#333",
                    }}
                  >
                    <p style={{ fontWeight: "bold", color: "#6c757d" }}>
                      <span style={{ color: "#FF9900" }}>Address:</span>{" "}
                      {formatAddress(account.address)}
                    </p>
                    {account.displayBalance && (
                      <p style={{ fontWeight: "bold", color: "#6c757d" }}>
                        <span style={{ color: "#FF9900" }}>Balance:</span> {account.displayBalance}
                      </p>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
