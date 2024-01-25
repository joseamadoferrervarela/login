import { useEffect } from "react";

export function Logout() {
    useEffect(() => {
        sessionStorage.removeItem("email");
        location.href='#/'   
    }, [])
    
  return (
    <></>
  )
}

