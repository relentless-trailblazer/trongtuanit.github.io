import React from "react";
import { Button, Modal } from "antd";
import { ModalCounter } from "antd";
import "antd/dist/antd.css";
import { Component } from "react";

export default class Content extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      counter: null,
    };
  }
  
  // state = {
  //   modalVisible: false,
  //   counter: 0,
  // }

  setModalVisible (modalVisible) {
    this.setState({ modalVisible });
  }

  handleClickCounter = (e) => {
    console.log("clicked!");
    this.setState( ({counter : this.state.counter+1}) );
  }

  handleClickShowModal = () => {
    this.setState({modalVisible: !this.state.modalVisible, counter:null})
  }

  // componentDidMount(){
  //   this.setState(({counter : 0}) );
  // }
  // componentWillMount() {
  //   this.setState(({counter : 0}) );
  // }

  renderModal = () => {
    if(this.state.modalVisible)
      return (
        <div onClick={this.handleClickCounter}> 
          <Modal
            closable
            title="Hello"
            style={{ top: 20 }}
            visible={this.state.modalVisible}
            onOk={this.handleClickShowModal}
            onCancel={this.handleClickShowModal}
          >
            {this.renderCounter()}
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, debitis! </p>
          </Modal>
        </div>
      );
    return null;
  }
  renderCounter = () => {
    if(this.state.counter) 
      return (
        <p>Count value: {this.state.counter}</p>
      );
    return null;
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={ this.handleClickShowModal}>
         Hit me :D !
        </Button>
        {this.renderModal()}
        {this.renderCounter()}
        
      </div>
    );
  }
}












// render() {
//   return (
//     <div>
//       <Button type="primary" onClick={ () => this.setModalVisible(true)}>
//        Hit me :D !
//       </Button>
//       <Modal
//         title="Hello"
//         style={{ top: 20 }}
//         visible={this.state.modalVisible}
//         onOk={() => this.setModalVisible(false)}
//         onCancel={() => this.setModalVisible(false)}
//         onClick={this.handleClick}
//       >
//         <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, debitis! </p>
//       </Modal>
//       <p>Count value: {this.state.counter}</p>
//     </div>
//   );
// }













// <Button type="primary" onClick={() => this.setModal2Visible(true)}>
//           Vertically centered modal dialog
//         </Button>
//         <Modal
//           title="Vertically centered modal dialog"
//           centered
//           visible={this.state.modal2Visible}
//           onOk={() => this.setModal2Visible(false)}
//           onCancel={() => this.setModal2Visible(false)}
//         >
//           <p>some contents...</p>
//           <p>some contents...</p>
//           <p>some contents...</p>
//         </Modal>