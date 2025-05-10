import { StreamView, useStreamContext, Prejoin } from "@vidbloq/react";
import { BaseWalletConnectButton } from "@solana/wallet-adapter-react-ui";
// import { WalletButton } from "@streamlink/react";
// import Prejoin from "./prejoin";

const Testing = () => {
  const { token } = useStreamContext();
  // <Prejoin />
  const buttonLabels = {
    connecting: "Connecting...",
    connected: "Connected",
    "has-wallet": "Connect",
    "no-wallet": "Get Wallet",
  };
  return (
    <>
      {token ? (
        <StreamView />
      ) : (
        <>
          <div className="">
            {/* <WalletButton /> */}
            <BaseWalletConnectButton labels={buttonLabels} />
          </div>

          <Prejoin />
        </>
      )}
    </>
  );
};

export default Testing;
