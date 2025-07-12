import { Component } from 'react';

class BugCreator extends Component<unknown, { triggerError: boolean }> {
  constructor(props: unknown) {
    super(props);
    this.state = { triggerError: false };
  }

  render() {
    if (this.state.triggerError) {
      throw new Error('This is a test error');
    }

    return (
      <button
        onClick={() => this.setState({ triggerError: true })}
        className="bg-red-500 text-white py-2 px-4 rounded"
      >
        Error button
      </button>
    );
  }
}

export { BugCreator };
