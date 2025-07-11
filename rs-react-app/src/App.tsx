import { Component } from 'react';
import { Results } from './output/components/Results';
// import { TopControls } from './searchBlock/components/SearchBlock';

class App extends Component {
  render() {
    return (
      <main className="prose">
        {/* <TopControls /> */}
        <Results />
      </main>
    );
  }
}

export default App;
