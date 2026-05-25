import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlinestatus, setOnlineStatus] = useState(navigator.onLine);
  //check if online

  useEffect(() => {
    window.addEventListener("offline", () => {
      console.log("You are offline");
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      console.log("You are online");
      setOnlineStatus(true);
    });
  }, []);

  //boolean value
  return onlinestatus;
};
export default useOnlineStatus;
