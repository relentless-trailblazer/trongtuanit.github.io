import React from "react";
import "./App.css";
import Card from "./components/Card";
import tourData from "./db";

function App() {
  console.log(tourData);

  return (
    <React.Fragment>
      <div className="app">
        {tourData.map(({ id, city, description, img, name }) => (
          <Card
            key={id}
            imgLink={img} 
            description={description} 
            name={name}
            title={city}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
