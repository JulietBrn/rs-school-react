import { Component } from 'react';
import { Results } from './output/components/Results';
import { TopControls } from './searchBlock/components/SearchBlock';
import type { TopControlsProps, TopControlsState } from './types/topControls';

class App extends Component<TopControlsProps, TopControlsState> {
  constructor(props: TopControlsProps) {
    super(props);
    this.state = {
      inputValue: props.inputValue || '',
      data: [],
      error: null,
      isLoading: false,
    };
  }

  updateInput = (val: string) => {
    this.setState({ inputValue: val });
  };

  fetchData = async (inputValue: string) => {
    this.setState({ isLoading: true, error: null, data: [] });
    let URL;
    if (inputValue.trim() === '') {
      URL = 'https://pokeapi.co/api/v2/pokemon/';
    } else {
      URL = `https://pokeapi.co/api/v2/pokemon/${inputValue}/`;
    }

    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error('Something went wrong');

      const data = await response.json();
      this.setState({ data: data?.results || [data], isLoading: false });
    } catch {
      console.log('Some error occur');
      this.setState({ error: 'Failed to fetch data', isLoading: false });
    }
  };

  componentDidMount() {
    const savedValue = localStorage.getItem('inputValue');
    if (savedValue) {
      this.setState({ inputValue: savedValue }, () => {
        this.fetchData(savedValue);
      });
    }
  }

  render() {
    return (
      <main className="prose">
        <TopControls
          inputValue={this.state.inputValue}
          updateInput={this.updateInput}
          fetchData={this.fetchData}
        />
        <Results
          data={this.state.data}
          isLoading={this.state.isLoading}
          error={this.state.error}
        />
      </main>
    );
  }
}

export default App;
