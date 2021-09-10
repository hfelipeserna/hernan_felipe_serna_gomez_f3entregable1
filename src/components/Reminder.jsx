import React from "react";

class Reminder extends React.Component {
  render() {
    return (
      <div className="reminder">
        <h3>Selección anterior: {this.props.previousChoise}</h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul>{this.props.historicalRecord}</ul>
      </div>
    );
  }
}

export default Reminder;
