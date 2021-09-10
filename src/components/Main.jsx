import React from "react";
import data from "../data/data.json";
import Options from "./Options";
import Reminder from "./Reminder";
import Swal from "sweetalert2";

class Main extends React.Component {
  //Constructor de la clase
  constructor(props) {
    super(props);
    this.state = { count: 0, previousChoise: "", historicalRecord: [] };
  }

  //Actualiza el estado de la instancia cuando existan cambios
  componentDidUpdate(_, previousState) {
    if (previousState.count !== this.state.count) {
      this.state.historicalRecord.push(this.state.previousChoise);
    }
  }

  //Manejador del evento onClick
  handleClick = (event) => {
    console.log("Hice click!");
    const button_id = event.target.id;
    if (this.state.count >= 7) {
      Swal.fire({
        title: "Has llegado al fin",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else if (button_id === "A" && this.state.previousChoise !== "A") {
      this.setState({ count: this.state.count + 1, previousChoise: "A" });
    } else if (button_id === "A" && this.state.previousChoise === "A"){
      this.setState({ count: this.state.count + 2});
    } else if (button_id === "B" && this.state.previousChoise === "A"){
      this.setState({ count: this.state.count + 3, previousChoise: "B"});
    } else if (button_id === "B"){
      this.setState({ count: this.state.count + 2, previousChoise: "B"});
    }
  };

  //Función obligatoria para renderizar en el DOM
  render() {
    return (
      <div className="layout">
        <h1 className="tittle">ELIGE TU PROPIA HISTORIA</h1>
        <h2 className="history">{data[this.state.count].historia}</h2>
        <Options
          handleClick={this.handleClick}
          optionA={data[this.state.count].opciones.a}
          optionB={data[this.state.count].opciones.b}
        />
        <Reminder
          previousChoise={this.state.previousChoise}
          historicalRecord={this.state.historicalRecord.map(
            (history, index) => (
              <li key={index}>{history}</li>
            ),
            data[this.state.count].id
          )}
        />
      </div>
    );
  }
}

export default Main;
