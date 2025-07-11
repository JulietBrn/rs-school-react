import { Component, type MouseEvent } from 'react';

interface TopControlsProps {
  inputValue: string;
}

interface TopControlsState {
  inputValue: string;
  data: [];
}

class TopControls extends Component<TopControlsProps, TopControlsState> {
  constructor(props: TopControlsProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { inputValue: 'pikachu', data: [] };
  }

  componentDidMount() {
    this.fetchData(this.state.inputValue);
  }

  fetchData = async (inputValue: string) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputValue}/`
        // `https://pokeapi.co/api/v2/ability/`
      );
      console.log(response);
      if (!response.ok) throw new Error('Something went wrong');

      const data = await response.json();
      console.log(data);
      this.setState({ ...this.state, data });
    } catch {
      console.log('Some error occur');
    }
  };

  updateInput(val: string) {
    this.setState({ ...this.state, inputValue: val });
  }

  handleClick(e: MouseEvent) {
    e.preventDefault();
  }

  render() {
    return (
      <section>
        <h2>TopControls!</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <label htmlFor="search">
            <input
              id="search"
              type="text"
              value={this.state.inputValue}
              onChange={(e) => this.updateInput(e.target.value.trim())}
              className="border-2 border-indigo-600 py-1 px-4 min-h-11 w-full"
            />
          </label>
          <button
            onClick={(e) => this.handleClick(e)}
            className="py-2 px-4 bg-indigo-700 text-amber-100 sm:max-w-40"
          >
            Search
          </button>
        </form>
      </section>
    );
  }
}

export { TopControls };
