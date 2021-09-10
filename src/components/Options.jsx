import React from "react";

class Options extends React.Component {
  render() {
    return (
      <div className="options">
        <div className="choise">
          <button id="A" className="buttons" onClick={this.props.handleClick}>
            A
          </button>
          <h2>{this.props.optionA}</h2>
        </div>
        <div className="choise">
          <button id="B" className="buttons" onClick={this.props.handleClick}>
            B
          </button>
          <h2>{this.props.optionB}</h2>
        </div>
      </div>
    );
  }
}

export default Options;
