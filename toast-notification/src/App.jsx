import "./App.css";
// import Notifications from "./components/Notifications";
import useNotification from "./hooks/useNotification";

function App() {
  const { triggerNotification, NotificationComponent } =
    useNotification("top-right");

  return (
    <>
      <div className="showNotificationBtns">
        <button
          onClick={() =>
            triggerNotification({
              type: "success",
              message: "This is a success message",
              duration: 5000,
            })
          }
        >
          Show Success
        </button>

        <button
          onClick={() =>
            triggerNotification({
              type: "info",
              message: "This is a info message",
              duration: 5000,
            })
          }
        >
          Show Info
        </button>

        <button
          onClick={() =>
            triggerNotification({
              type: "warning",
              message: "This is a warning message",
              duration: 5000,
            })
          }
        >
          Show Warning
        </button>

        <button
          onClick={() =>
            triggerNotification({
              type: "error",
              message: "This is a error message",
              duration: 5000,
            })
          }
        >
          Show Error
        </button>

        {NotificationComponent}
      </div>
    </>
  );
}

export default App;
