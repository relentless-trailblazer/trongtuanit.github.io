
import './App.css';
import React, { Component } from 'react';
import BlogCard from './components/BlogCard'


class App extends Component {
  state = {
    showBlogs : true,
  }

  inf = [
    {
      id: 1,
      title: 'Blog title 1',
      desc: 'Lorem Ipsum Dolor Lorem Ipsum'  
    },
    {
      id: 2,
      title: 'Blog title 2',
      desc: 'Lorem Ipsum Dolor Lorem Ipsum'  
    },
    {
      id: 3,
      title: 'Blog title 3',
      desc: 'Lorem Ipsum Dolor Lorem Ipsum'  
    }
  ]
  blogCards = this.inf.map( (item,pos) => {
    return (
      <BlogCard id={item.id} desc={item.desc} title={item.title} key={pos}></BlogCard>
    )
  })


  onHideBtnClick = () => {
    // let updatedState = !this.state.showBlogs;
    this.setState((previousState, previousProps) => {
      return {showBlogs: !previousState.showBlogs}
    })
    console.log(this.state.showBlogs);
  }

  render() {
    console.log("Render Called!");
    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
        <br/>
        {this.state.showBlogs ? this.blogCards : null}
      </div>
    );
  }
  
}

export default App;

















// ------------------L1-----------------------
// const firstName = 'John';
// const lastName = 'Wick';
// const age = 20;
// const job = 'Web developer';
// const inputPlaceholder = 'This is data auto fill';
// const detailsInputBox = <input placeholder={inputPlaceholder} autoComplete/>;
// const getFulname = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// }

// const a = [1, 2, 3, 4];
// const obj ={
//   name: 'Hehe',
//   age : 12,
// }
// return (
//   <div className="App">
//     <h3>Full name: {obj.name}</h3>
//     <p>Age: {obj.age}</p>
//     <p>Job: {job}</p>
//     <p>Index: {a[0]}</p>
//     {detailsInputBox}


//   </div>
// );








// ----------------------------L2------------------------------
  // React.createElement("div", {
//   className: "App"
// }, /*#__PURE__*/
// React.createElement("div", null, /*#__PURE__*/
// React.createElement("h3", null, blogObj.title), /*#__PURE__*/
// React.createElement("p", null, blogObj.description)), /*#__PURE__*/
// React.createElement("hr", null), /*#__PURE__*/
// React.createElement("div", null, /*#__PURE__*/
// React.createElement("h3", null, blogObj.title), /*#__PURE__*/
// React.createElement("p", null, blogObj.description)), /*#__PURE__*/
// React.createElement("hr", null), /*#__PURE__*/
// React.createElement("div", null, /*#__PURE__*/
// React.createElement("h3", null, blogObj.title), /*#__PURE__*/
// React.createElement("p", null, blogObj.description)))

// );








// -----------------------------L3---------------------------
// const styleObj = {
//   margin: '16px',
//   padding: '16px',
//   boxSizing: 'border-box',
//   borderRadius: '5px',
//   boxShadow: '0 2px 5px #ccc'
// }
// const blogObj = {
//   title: 'Blog title 1',
//   description: 'Lorem Ipsum Dolor Lorem Ipsum'
// }
// const blogObj = {
//   title: 'Blog title 1',
//   description: 'Lorem Ipsum Dolor Lorem Ipsum'
// }
// return (
//     <div className="App">
//       <div className="BlogCard">
//         <h3>{blogObj.title}</h3>
//         <p>{blogObj.description}</p>
//       </div>
//       <hr/>
//       <div className="BlogCard">
//         <h3>{blogObj.title}</h3>
//         <p>{blogObj.description}</p>
//       </div>
//       <hr/>
//       <div className="BlogCard">
//         <h3>{blogObj.title}</h3>
//         <p>{blogObj.description}</p>
//       </div>
//     </div>
//  );





// const inf = [
//   {
//     id: 1,
//     title: 'Blog title 1',
//     desc: 'Lorem Ipsum Dolor Lorem Ipsum'  
//   },
//   {
//     id: 2,
//     title: 'Blog title 2',
//     desc: 'Lorem Ipsum Dolor Lorem Ipsum'  
//   },
//   {
//     id: 3,
//     title: 'Blog title 3',
//     desc: 'Lorem Ipsum Dolor Lorem Ipsum'  
//   }

// ]
// const blogCards = inf.map( (item,pos) => {
//   return (
//     <BlogCard id={item.id} desc={item.desc} title={item.title} key={pos}></BlogCard>
//   )
// })