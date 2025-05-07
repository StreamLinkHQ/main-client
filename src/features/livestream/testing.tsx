import { StreamView, useStreamContext, Prejoin } from "@vidbloq/react"
// import Prejoin from "./prejoin";

const Testing = () => {
    const { token } = useStreamContext();
  return (
    <>
       {token ? <StreamView /> : <Prejoin />}
    </>
 
  )
}

export default Testing