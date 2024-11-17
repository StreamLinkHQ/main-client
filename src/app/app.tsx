import { StreamLinkRoom } from "@streamlink/react";
import { AppRouter } from "./app-router";

export function App() {
  return (
    <StreamLinkRoom>
      <AppRouter />
    </StreamLinkRoom>
  );
}
