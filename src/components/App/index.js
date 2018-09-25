import React, { Component } from "react";
import Header from "./../Header";
import NovoUsuario from "./../NovoUsuario";

class App extends Component {
  render() {
    return (
      <div>
        <Header text="Agenda de Gentilezas" />
        <NovoUsuario />
      </div>
    );
  }
}

export default App;
