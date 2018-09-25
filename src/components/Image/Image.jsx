import React, { Component } from "react";
import Avatar from "./img/avatars.png";

class Image extends Component {
  calcularPosicaoX() {
    return `${this.props.eixoX * this.props.width * -1}px`;
  }

  calcularPosicaoY() {
    return `${this.props.eixoY * this.props.height * -1}px`;
  }

  calcularTamanho() {
    return `auto ${this.props.backgroundHeight}px`;
  }

  obterEstilo() {
    return {
      backgroundImage: `url(${Avatar})`,
      backgroundPositionX: this.calcularPosicaoX(),
      backgroundPositionY: this.calcularPosicaoY(),
      backgroundSize: this.calcularTamanho(),
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      display: "table",
      margin: "0 auto"
    };
  }

  render() {
    return <div style={this.obterEstilo()} />;
  }
}

export default Image;
