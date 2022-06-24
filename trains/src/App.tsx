import React from "react";
import "./App.css";
import { Train } from "../types/train";
import TrainTable from "./TrainTable";

function App() {
  const [trains, setTrains] = React.useState<Array<Train>>([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/api/trains/all")
      .then((res) => res.json())
      .then((data) => {
        try {
          console.log(data);
          setTrains(data.trains);
        } catch (err) {
          console.error(err);
        }
      });
  }, []);

  console.log(trains.length);

  return (
    <div className="App">
      <p>My trains app</p>
      {trains.length && <TrainTable trains={trains} />}
    </div>
  );
}

export default App;
