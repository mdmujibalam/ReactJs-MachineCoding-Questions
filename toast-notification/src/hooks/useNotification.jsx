import { useCallback, useState } from "react";
import Notification from "../components/Notification";

const useNotification = (position = "top-right") => {
  const [notification, setNotification] = useState(null);

  let timer;

  const onClose=()=>{
    clearTimeout(timer);
    setNotification(null);
  }

  const triggerNotification = useCallback((notificationProps) => {
    clearTimeout(timer);

    setNotification(notificationProps);

    timer = setTimeout(() => {
      setNotification(null);
    }, notificationProps.duration);
  }, []);

  const NotificationComponent = notification ? (
    <div className={`${position}`}>
      <Notification {...notification} onClose={onClose}/>
    </div>
  ) : null;

  return { triggerNotification, NotificationComponent };
};

export default useNotification;
