
import { WalletProviders } from "../context";
import { AppRouter } from "./app-router";
import { VidbloqProvider, WalletAdapterBridge } from "@vidbloq/react";

export function App() {
  return (
    // <StreamLinkRoom>
    //   <AppRouter />
    // </StreamLinkRoom>
    <WalletProviders>
      <VidbloqProvider
        apiKey="sk_5fa927d2ad021016ae36b2656fbf8085"
        apiSecret="iO24O0xXjuXSsIhfLorPKRS2NvcWjbRswYLcnYAvxk4="
      >
        <WalletAdapterBridge />
        <AppRouter />
       
      </VidbloqProvider>
    </WalletProviders>
  );
}
