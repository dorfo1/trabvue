import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );

  }
}

export default App;


/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/