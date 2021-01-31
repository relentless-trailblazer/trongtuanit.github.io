import React, { Component } from "react";
// state không được thay đổi trực tiếp
// state bất biến

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  renderDescription = () => {
    if (this.state.isShown)
      return (
        <p>
          <b>description: </b>
          {this.props.description}
        </p>
      );
    return null;
  };

  handleClick = (e) => {
    console.log("Clicked");
    this.setState({ isShown: !this.state.isShown });
  };

  render() {
    const { id, title, imgLink, name } = this.props;
    console.log("card state", this.state);
    return (
      <div className="card">
        <img src={imgLink} alt="" />
        <div>
          <button onClick={this.handleClick}>toggle</button>
          <p>
            <b>title: </b>
            {title}
          </p>
          <p>
            <b>name: </b>
            {name}
          </p>
          {/* {this.renderDescription()} */}
          {this.state.isShown && (
            <p>
              <b>description: </b>
              {this.props.description}
            </p>
          )}
        </div>
      </div>
    );
  }
}
