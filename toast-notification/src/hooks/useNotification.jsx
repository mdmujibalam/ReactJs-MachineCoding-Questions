import { useCallback, useRef, useState } from "react";
import Notification from "../components/Notification";

const useNotification = (position = "top-right") => {
  const [notifications, setNotifications] = useState([]);

  const timerRef = useRef({});

  const onClose = useCallback((id) => {
    clearTimeout(timerRef.current[id]);
    setNotifications((prev) => prev.filter((curr) => curr.id !== id));
    delete timerRef.current[id];
  }, []);

  const triggerNotification = useCallback((notificationProps) => {
    const id = new Date().getTime();
    const modifiedNotificationProp = { ...notificationProps, id };

    setNotifications((prev) => [...prev, modifiedNotificationProp]);

    timerRef.current[id] = setTimeout(() => {
      setNotifications((prev) => prev.filter((curr) => curr.id !== id));
      delete timerRef.current[id];
    }, notificationProps.duration);
  }, []);

  const NotificationComponent = notifications.length ? (
    <div className={`${position} notification-stack`}>
      {notifications.map((item, index) => {
        return (
          <Notification
            key={item.id}
            {...item}
            onClose={() => onClose(item.id)}
          />
        );
      })}
    </div>
  ) : null;

  return { triggerNotification, NotificationComponent };
};

export default useNotification;
