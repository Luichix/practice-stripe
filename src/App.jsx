import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Stripe from './Stripe';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
      </header>
      <main className="App-main">
        <div>
          <Stripe />
        </div>
      </main>
    </div>
  );
}

export default App;
