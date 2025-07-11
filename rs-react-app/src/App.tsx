import { Component } from 'react';
import './App.css';

class TopControls extends Component {
  render() {
    return <h2>Hi, I am a TopControl!</h2>;
  }
}

function App() {
  return (
    <main>
      <TopControls />
    </main>
  );
}

export default App;
