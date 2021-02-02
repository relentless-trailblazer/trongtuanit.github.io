import React from "react";
import {  Modal } from "antd";
import "antd/dist/antd.css";

export default class Modalj extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  // handleClickShowModal = () => {
  //   this.setState({
  //     modalVisible: !this.state.modalVisible,
  //   })
  // }
  componentDidMount(){
    this.counter = setInterval(
      () => this.count(), 1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.counter);
  }
  count() {
    this.setState({
      counter : this.state.counter+1,
    })
    console.log(this.state.counter);
  }



  render() {
    return (
      <Modal
        title="Hello"
        style={{ top: 20 }}
        visible={this.props.isShown}
        // onOk={this.props.triggerVisibleAndCounterUpdate}
        onOk={()=>this.props.triggerVisibleAndCounterUpdate.changeCounter(this.state.counter)}
        onCancel={this.props.triggerVisibleUpdate}
      >
        <p>Count value: {this.state.counter}</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, debitis! </p>
      </Modal>
  );
  }


}

