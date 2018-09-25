// Dependencies Components
import React, { Component } from "react";

// Custom components
import Label from "../Label";
import Input from "../Input";
import GenderSelector from "../GenderSelector";
import Usuario from "../../models/Usuario";
import Button from "../Button";

// Component Statefull
class NovoUsuario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: new Usuario(),
      validacao: {
        nomeInvalido: false,
        generoInvalido: false
      },
      primeiraVisaoCompleta: false
    };
  }

  atualizaNome = e => {
    let usuario = this.state.usuario;
    usuario.nome = e.target.value;
    this.setState({ usuario });
  };

  atualizarGenero = (e, genero) => {
    e.preventDefault();
    let usuario = this.state.usuario;
    usuario.genero = genero;
    this.setState({ usuario });
  };

  validar = e => {
    let usuario = this.state.usuario;
    let validacao = this.state.validacao;

    validacao.nomeInvalido = !usuario.validarNome();
    validacao.generoInvalido = !usuario.validarGenero();

    let mensagem = "";
    let primeiraVisaoCompleta = false;

    if (validacao.nomeInvalido && validacao.generoInvalido) {
      mensagem = "Os campos nome e gênero estão inválidos!";
    } else if (validacao.nomeInvalido) {
      mensagem = "Seu nome está inválido!";
    } else if (validacao.generoInvalido) {
      mensagem = "Selecione seu gênero!";
    } else {
      primeiraVisaoCompleta = true;
    }
    if (!primeiraVisaoCompleta) {
      this.props.erro(mensagem);
    }
    this.setState({ validacao, primeiraVisaoCompleta });

    e.preventDefault();
  };

  render() {
    console.log(this.state);
    return (
      <div className="center">
        <form className="pure-form pure-form-stacked">
          <Label
            htmlFor="nome"
            texto="Quem é você?"
            valorInvalido={this.state.validacao.nomeInvalido}
          />
          <Input
            id="nome"
            placeholder="Digite seu nome"
            maxLength="40"
            readOnly={false}
            valorInvalido={this.state.validacao.nomeInvalido}
            defaultValue={this.state.usuario.nome}
            onChange={this.atualizaNome.bind(this)}
          />
          <Label
            htmlFor="genero"
            texto="Seu gênero"
            valorInvalido={this.state.validacao.generoInvalido}
          />
          <GenderSelector
            valorInvalido={this.state.validacao.generoInvalido}
            genero={this.state.usuario.genero}
            atualizarGenero={this.atualizarGenero.bind(this)}
          />
          <Button principal texto="Próximo" onClick={this.validar} />
        </form>
      </div>
    );
  }
}

export default NovoUsuario;
