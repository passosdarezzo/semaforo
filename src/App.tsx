import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

// Components
import Semaforo from './components/Semaforo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Semaforo />
    </div>
  );
}

export default App;
