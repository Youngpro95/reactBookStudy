import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './modules';

// const store = createStore(rootReducer);
// console.log(store.getState());

function App() {
  return (
    <>
      <CounterContainer/>
      <hr/>
      <TodosContainer/>
    </>
  );
}

export default App;
