import './App.css';
import { Component } from 'react';
import Calculator from './Calculator';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Calculator />;
  }
}

export default App;