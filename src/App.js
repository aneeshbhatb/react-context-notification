import logo from "./logo.svg";
import "./App.css";
import { useNotificationContext } from "./Components/Common/Notification/context";

function App() {
  const { notify } = useNotificationContext();

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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Notification</p>
        <button onClick={showNotification} className="primary-btn">
          Show Notification
        </button>
      </header>
    </div>
  );
}

export default App;
