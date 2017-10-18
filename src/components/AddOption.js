import React from 'react';

export default class AddOption extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOptions(e) {
    e.preventDefault();
    // rerender();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOptions(option);
    if (error) {
      this.setState(() => {
        return {error: error};
      });
    }

  }
  render() {
    return (
      <div>
        <div>handleAddOptions</div>
        <form onSubmit={this.handleAddOptions}>
          <input type="text" name="option"></input>
          <button type="submit">Add button</button>
        </form>
        {!!this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}
