import { StreamView, useStreamContext, Prejoin } from "@vidbloq/react";
import { WalletButton } from "@streamlink/react";
// import Prejoin from "./prejoin";

const Testing = () => {
  const { token } = useStreamContext();
  return (
    <>
      {token ? (
        <StreamView />
      ) : (
        <>
          <div className="border">
            <WalletButton />
          </div>

          <Prejoin />
        </>
      )}
    </>
  );
};

export default Testing;
