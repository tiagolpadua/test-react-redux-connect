import React, { Component } from 'react';

class Painel extends Component {
  render() {
    return (
      <span>Valor: {this.props.valor}</span>
    );
  }
}

export default Painel;
