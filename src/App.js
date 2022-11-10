import logo from './logo.svg';
import './App.css';
import Multiplier from './components/Multiplier';
import { createContext, useState } from 'react';
import Counter from './components/Counter';
import Subtraction from './components/Subtraction';
import Divider from './components/Divider';

export const CounterContex = createContext();

function App() {
  const [counter, setCounter] = useState(5);
  return (
    <CounterContex.Provider value={{ counter, setCounter }}>
      <div>
        <Counter />
        <br />
        <div className='d-flex flex-wrap'>
          <Subtraction />
          <Multiplier />
          <Divider />
        </div>
      </div>
    </CounterContex.Provider>
  );
}

export default App;
