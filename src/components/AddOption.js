import React from 'react';

export default class AddOption extends React.Component {

  state = {
    error: undefined
  };

  handleAddOptions=(e) => {
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
          <button className="button" type="submit">Add button</button>
        </form>
        {!!this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}
