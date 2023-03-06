import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from "@redux-devtools/extension/";

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// 6.
function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

// 2.
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length -1 ? 0 : state.index + 1
      };
      case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length -1 : state.index - 1
      };
      // 6.
      case 'RANDOM_COLOR':
        return {
          ...state,
          colors: [...state.colors, criarCor()],
          index: state.colors.length
        };
    default:
      return state;
  }
};

// 1.
const store = createStore(reducer, composeWithDevTools());
console.log(store);

// 4.
const btnPrevious = document.getElementById('previous');
const btnNext = document.getElementById('next');
// 6.
const btnRandom = document.getElementById('random');

btnPrevious.addEventListener('click', () => {
  store.dispatch({type: 'PREVIOUS_COLOR'})
})
btnNext.addEventListener('click', () => {
  store.dispatch({type: 'NEXT_COLOR'})
})

// 6.
btnRandom.addEventListener('click', () => {
  store.dispatch({type: 'RANDOM_COLOR'})
})

// 5.
store.subscribe(() => {
  const { colors, index } = store.getState();
  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
})

