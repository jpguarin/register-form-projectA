import React from 'react';
import './App.scss';
import Register from './components/register/register-form';

function App() {
  return (
    <React.Fragment>
      <header></header>
      <main className="dflex flex-justify-content-center flex-align-items-center">
        <Register />
      </main>
      <footer></footer>
    </React.Fragment>
  );
}

export default App;
