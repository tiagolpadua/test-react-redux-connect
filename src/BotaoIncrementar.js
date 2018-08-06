import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    incrementar: () => dispatch({ type: 'INCREMENTA' })
  };
};

class BotaoIncrementar extends Component {
  render() {
    return (
      <button onClick={this.props.incrementar}>Incrementar</button>
    );
  }
}

export default connect(null, mapDispatchToProps)(BotaoIncrementar);
