// import { ViewStream } from "@streamlink/react"
import { useParams } from "react-router-dom";
import { StreamRoom } from "@vidbloq/react";

// import Prejoin from "./prejoin";
import Testing from "./testing";

// type UserType = "host" | "guest";

const ViewLivestream = () => {
  const { id } = useParams();

  // const [searchParams, test] = useSearchParams();
  // console.log(test)
  // const mode = searchParams.get("mode");
  return (
    // <ViewStream roomName={id as string} userType={mode as UserType}/>
     <StreamRoom roomName={id as string}>
     <Testing />
    </StreamRoom>

  );
};

export default ViewLivestream;
