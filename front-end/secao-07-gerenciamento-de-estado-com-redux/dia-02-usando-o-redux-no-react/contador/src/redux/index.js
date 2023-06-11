// ./src/redux/index.js
import { legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import counterReducer from './reducers/counterReducer';
// import rootReducer from '../reducers';


// const INITIAL_STATE = { count: 0 };

// criando o reducer e o adicionando à store.
// const reducer = (state = INITIAL_STATE, action) => state;

const store = createStore(counterReducer, composeWithDevTools());

export default store;
