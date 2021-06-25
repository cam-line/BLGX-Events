import "./App.css";
import AddEventControl from "./AddEventForms/AddEventControl";

function App() {
  return (
    <div className="App">
      <div className="PrivateRoutes">
        {/*Main Component, renders all other components*/}
        <AddEventControl />
      </div>
    </div>
  );
}
export default App;
