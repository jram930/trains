import React from "react";
import "./App.css";

fetch("http://localhost:5000/api/trains/all")
  .then((res) => res.json())
  .then((data) => console.log(data));

function App() {
  const [trains, setTrains] = React.useState<Array<Train>>([]);

  return (
    <div className="App">
      <p>My trains app</p>
    </div>
  );
}

export default App;
