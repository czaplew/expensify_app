// import validator from 'validator';
// validator.isEmail('test');
import React from 'react';
import ReactDOM from 'react-dom';
import Action from './components/Action';
import AddOption from './components/AddOption';
import Header from './components/Header';
// import Option from './components/Option';
import Options from './components/Options';
import User from './components/User';
import OptionModal from './components/OptionModal';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

class IndecisionApp extends React.Component {

  state = {
    options: [],
    seletedOption: undefined
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({options: options}));
      }

    } catch (e) {} finally {}

    console.log(`fetching data`);
  }

  componentDidUpdate(prevState) {
    try {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    } catch (e) {} finally {}

    console.log(`saving data`);
  }
  componentWillUnmount() {
    console.log(`componentWillUnmount`);
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}))
  }

  handleDeleteOptions = () => {
    this.setState(() => ({options: []}));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  }

  handleAddOptions = (oObj) => {
    // this.setState((prevState)=>{return {prevState.options.push(oObj)};});
    if (!oObj) {
      return "Put smth into input";
    } else if (this.state.options.indexOf(oObj) > -1) {
      return 'This option already exists';
    } else {
      this.setState((prevState) => ({options: prevState.options.concat(oObj)}));
    }
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({selectedOption: option}));
    // alert(option);
  }

  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    // const options = ["Thing one","Thing two", "Thing three"];
    return (
      <div>
        <Header className="header" title={title} subtitle={subtitle}></Header>
        <div className = "container">
          <Action hasOptions={this.state.options.length > 0} onClick={this.handlePick}></Action>
          <Options options={this.state.options} handleDeleteOption={this.handleDeleteOption} handleDeleteOptions={this.handleDeleteOptions}></Options>
          <AddOption handleAddOptions={this.handleAddOptions}></AddOption>
          <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}></OptionModal>
        </div>

      </div>
    );
  }
}

ReactDOM.render(
  <IndecisionApp/>, document.getElementById('app'));
