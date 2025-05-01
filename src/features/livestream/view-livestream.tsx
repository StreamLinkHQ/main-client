// import { ViewStream } from "@streamlink/react"
import { useParams } from "react-router-dom";
import "@livekit/components-styles";
import { StreamRoom, StreamView } from "@vidbloq/react";

// type UserType = "host" | "guest";

const ViewLivestream = () => {
  const { id } = useParams();
  // const [searchParams, test] = useSearchParams();
  // console.log(test)
  // const mode = searchParams.get("mode");
  return (
    // <ViewStream roomName={id as string} userType={mode as UserType}/>
    <StreamRoom roomName={id as string}>
      <StreamView />
    </StreamRoom>
  );
};

export default ViewLivestream;
