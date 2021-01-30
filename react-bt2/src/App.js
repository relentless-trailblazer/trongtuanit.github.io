
import './App.css';
import React, { Fragment } from 'react';
import Image from './components/Image';
import Content from './components/Content'



function App() {
  const tourData = [
    {
      id: 1,
      city: "new york",
      img: "https://vnwin.vn/uploads/tour/my/nyc-my1.jpg?1561523889905",
      name: "new york bridge tour",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nam omnis error corrupti eum assumenda enim odit architecto corporis. Sequi",
    },
    {
      id: 2,
      city: "paris",
      img: "https://deviet.vn/wp-content/uploads/2018/07/3-ngay-o-paris.jpg",
      name: "paris lights tour",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nam omnis error corrupti eum assumenda enim odit architecto corporis. Sequi",
    },
    {
      id: 3,
      city: "london",
      img:"https://lp-cms-production.imgix.net/2020-08/GettyRF_150973282.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1",
      name: "london royal palace tour",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nam omnis error corrupti eum assumenda enim odit architecto corporis. Sequi",
    },
    {
      id: 4,
      city: "tokyo",
      img:"https://photo-cms-baophapluat.zadn.vn/w800/Uploaded/2021/nzyrelngtpy/2020_06_11/957_qclp.jpg",
      name: "tokyo sushi tour",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nam omnis error corrupti eum assumenda enim odit architecto corporis. Sequi",
    },
  ];
  tourData.forEach((ele) => {
    ele.city=ele.city.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    ele.name=ele.name.charAt(0).toUpperCase;
  })

  const showBtn = document.getElementsByClassName("showBtn");
  console.log(showBtn);
  

  return (
    <Fragment>




       
      {/* <div className="cards">
        <div className='card' id='card'>
          <Image img={tourData[0].img} id={tourData[0].id}></Image>
          <Content id={tourData[0].id} city={tourData[0].city} name={tourData[0].name} desc={tourData[0].description} /> 
        </div>
        <div className='card'>
          <Image img={tourData[1].img} id={tourData[1].id}></Image>
          <Content id={tourData[1].id} city={tourData[1].city} name={tourData[1].name} desc={tourData[1].description} /> 
        </div>
        <div className='card'>
          <Image img={tourData[2].img} id={tourData[2].id}></Image>
          <Content id={tourData[2].id} city={tourData[2].city} name={tourData[2].name} desc={tourData[2].description} /> 
        </div>
        <div className='card'>
          <Image img={tourData[3].img} id={tourData[3].id}></Image>
          <Content id={tourData[3].id} city={tourData[3].city} name={tourData[3].name} desc={tourData[3].description} /> 
        </div> 
       </div> */}
    </Fragment>
  );
}

export default App;
