import Button from "./components/Buttton";
import "./style.css"

function App() {
  return (
    <div className="App">
          <h1>Dynamic Buttons</h1>
      <Button name={"Blue"} className={"blue"} />
      <Button name={"Green"} className={"green"} />
      <Button name={"Orange"} className={"orange"} />
      <Button name={"Red"} className={"red"} />
      <Button name={"Outlined"} className={"outlined-blue"} />
    </div>
  );
}

export default App;
