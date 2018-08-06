import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { valor: state.valor };
};

class Painel extends Component {
  render() {
    return (
      <span>Valor: {this.props.valor}</span>
    );
  }
}

export default connect(mapStateToProps)(Painel);
