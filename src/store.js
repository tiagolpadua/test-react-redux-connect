import { createStore } from 'redux';

function reducer(state = { valor: 0 }, action = {}) {
  switch (action.type) {
    case 'INCREMENTA':
      return { ...state, valor: state.valor + 1 };
    case 'DECREMENTA':
      return { ...state, valor: state.valor - 1 };
    default:
      return state;
  }
}
const store = createStore(reducer);
export default store;
