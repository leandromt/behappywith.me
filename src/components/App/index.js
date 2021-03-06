import React, { Component } from "react";
import Header from "../Header";
import NovoUsuario from "../NovoUsuario";
import Toast from "../Tost";

class App extends Component {
  render() {
    return (
      <div>
        <Header text="Agenda de Gentilezas" />
        <NovoUsuario erro={msg => this.refs.toast.erro(msg)} />
        <Toast ref="toast" />
      </div>
    );
  }
}

export default App;
