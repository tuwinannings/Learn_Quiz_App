import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './components/Quiz'

function App() {
  return (
    <div className='App'>
      <Quiz></Quiz>
  </div>
    // <div className="App">
    //   <img src="images/quiz/IMG_20200812_145648.jpg" class="img-fluid" alt="Responsive image"></img>
    // </div>
    // <div className="App">
    //   <header className="App-header">
    //     <Button>ok</Button>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"npm 
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
