// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import React from 'react';
// import Content from './components/Content';
import Button from './components/Button';
import Card from './components/Card';
import image from './assests/OIP.jpg'


function App() {
  const content = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, culpa. ",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. "
  ];

  return (
    // <div className="App">
      <React.Fragment>
        {/* <Header/> */}
        <Card imgLink= {image} content={content[0]}>
          <Button label="click" cssClass="button"/>
          <p>Components</p>
        </Card>
        <Card imgLink= {image} content={content[1]}>
          <Button label="click" cssClass="button"/>
          <p>Components</p>
        </Card>
      </React.Fragment>

    // </div>
  );
}

export default App;
