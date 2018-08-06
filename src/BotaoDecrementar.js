import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    decrementar: () => dispatch({ type: 'DECREMENTA' })
  };
};

class BotaoDecrementar extends Component {
  render() {
    return (
      <button onClick={this.props.decrementar}>Decrementar</button>
    );
  }
}

export default connect(null, mapDispatchToProps)(BotaoDecrementar);
