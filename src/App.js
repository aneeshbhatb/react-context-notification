import logo from "./logo.svg";
import "./App.css";
import { useNotificationContext } from "./Components/Common/Notification/context";

function App() {
  const { notification, notify } = useNotificationContext();

  const renderNotificationMessage = (message) => {
    return (
      <div>
        <strong>{message}</strong>
      </div>
    );
  };

  const showNotification = () => {
    notify({
      type: "OPEN",
      payload: {
        id: `${performance.now()}`,
        title: "Title",
        message: renderNotificationMessage("Hello World"),
      },
    });
  };

  const clearNotifications = () => {
    notify({
      type: "CLEAR",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Notification</p>
        <div className="grid justify-stretch gap-4">
          <button onClick={showNotification} className="btn primary row-1">
            Show Notification
          </button>
          {notification.length ? (
            <button
              onClick={clearNotifications}
              className="btn secondary row-1"
            >
              Clear all
            </button>
          ) : (
            <></>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
