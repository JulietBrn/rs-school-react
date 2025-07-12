import { Component, type MouseEvent } from 'react';

type TopControlsProps = {
  inputValue?: string;
  updateInput: (value: string) => void;
  fetchData: (query: string) => void;
};
type TopControlsState = {
  inputValue: string;
};

class TopControls extends Component<TopControlsProps, TopControlsState> {
  constructor(props: TopControlsProps) {
    super(props);
    this.state = {
      inputValue: props.inputValue || '',
    };
  }

  componentDidMount() {
    this.props.fetchData(this.state.inputValue);
  }

  componentDidUpdate(prevProps: TopControlsProps) {
    if (prevProps.inputValue !== this.props.inputValue) {
      this.setState({ inputValue: this.props.inputValue || '' });
    }
  }

  updateInput = (val: string) => {
    this.setState({ inputValue: val });
    this.props.updateInput(val);
  };

  handleClick = (e: MouseEvent) => {
    e.preventDefault();
    this.props.fetchData(this.state.inputValue);
    if (this.state.inputValue) {
      localStorage.setItem('inputValue', this.state.inputValue);
    }
  };

  render() {
    return (
      <section>
        <h2>Find pokemon!</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <label htmlFor="search">
            <input
              id="search"
              placeholder="Enter pokemon name"
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
