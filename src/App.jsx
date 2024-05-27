import "./App.css";
import AlertClock from "./assets/components/AlertClock";

function App() {
  function handleShowTime() {
    const now = new Date();

    alert(`the current time is ${now.toLocaleTimeString()} `);
  }

  return (
    <div>
      <AlertClock onClick={handleShowTime} />
    </div>
  );
}

export default App;
