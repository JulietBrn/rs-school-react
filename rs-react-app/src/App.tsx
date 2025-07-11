import { Component } from 'react';

class TopControls extends Component {
  render() {
    return (
      <section>
        <h2>Hi, I am a TopControl!</h2>
        <p>lsls</p>
      </section>
    );
  }
}

function App() {
  return (
    <main className="prose">
      <TopControls />
    </main>
  );
}

export default App;
