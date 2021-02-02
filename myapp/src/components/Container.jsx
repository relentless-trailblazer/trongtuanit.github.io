import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import { Component } from "react";
import Modalj from "./Modalj"

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      counter: 0,
      isCount: false,
    };
    this.updateCounter = this.updateCounter.bind(this);
  }

  // renderCounter = () => {
  //   this.state.modalVisible 
  //   ? <p>Count value: {this.state.counter}</p>
  //   : null
  // }

  // updateVisible() {
  //   this.setState(
  //     {modalVisible: !this.state.modalVisible}
  //   )
  // }

  renderModal = () => {
    if(this.state.modalVisible) {
      <Modalj ></Modalj>
    }
    return null;
  }

  handleClickShowModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
      isCount: true,
    })
  }

  updateCounter  (){
    this.setState({
      modalVisible: !this.state.modalVisible,
      counter: this.state.counter,
    })
  }

  updateVisible () {
    this.setState({
      modalVisible: !this.state.modalVisible,
    })
  }

  // updateCounterVisible() {
  //   this.setState({
  //     isCount: true,
  //   })
  // }

  changeCounter(count) {
    this.setState({
      modalVisible: !this.state.modalVisible,
      counter : count
    })
  }

  render() {
    return (
      <div>
        <Button type="danger" onClick={this.handleClickShowModal}>
         Hit me :D !
        </Button>
        {
          this.state.modalVisible 
          ? <Modalj isShown={this.state.modalVisible} 
                    // triggerVisibleAndCounterUpdate={()=>this.updateCounter()}
                    triggerVisibleUpdate={()=>this.updateVisible()}
                    triggerVisibleAndCounterUpdate ={
                      {counter:this.state.counter,
                       changeCounter:this.changeCounter.bind(this)
                      }
                    }
            /> 
          : null
        }
        <p>Count value: {this.state.counter}</p>

      </div>
    );
  }
}




 








