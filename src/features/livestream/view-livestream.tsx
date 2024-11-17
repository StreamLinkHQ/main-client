import { ViewStream } from "@streamlink/react"
import { useParams, useSearchParams } from "react-router-dom";
import "@livekit/components-styles";


type UserType = "host" | "guest";

const ViewLivestream = () => {
  const { id } = useParams();
  const [searchParams, _] = useSearchParams();
  const mode = searchParams.get("mode");
  return (
    <ViewStream roomName={id as string} userType={mode as UserType}/>
  )
}

export default ViewLivestream