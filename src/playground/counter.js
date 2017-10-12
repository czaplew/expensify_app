class Counter extends React.Component {

  constructor(props)
  {
    super(props);

    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    // this.counter = 0;
    this.state = {age:props.age};
  }
// Old version of changing state
  addOne() {
    this.setState({age : (this.state.age + 1)});
  }

  minusOne() {
    this.setState((prevState)=>{return {age:(prevState.age - 1)};});
  }

  reset(){
    this.setState(()=>{return {age:0};});
  }

  render() {
    return (
      <div>
        <p>
          Age: {this.state.age}</p>
        {/* <p>{getLocation(this.city)}</p> */}
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }

}

Counter.defaultProps = {age:24};

ReactDOM.render(<Counter/>, document.getElementById("app"));

// let user =
// { name : "Kamil",
//   age : 24,
//   city : 'Wroclaw'
// };
//
// function getLocation(location) {
// return  location ? location : "";
// }
//
// const addOne = ()=>{
//   user.age++;
//   rerender();
// };
//
// const minusOne = ()=>{
//   user.age--;
//   rerender();
// };
//
//
//
// const rerender = () => {
//   const templateTwo = <div className="container">
//     <h1 className="{user.name ? 'alert alert-success' : 'alert alert-warning'}" role="alert">{user.name ? user.name : "anonymous"}</h1>
//     <p> Age: {user.age}</p>
//     <p>{getLocation(user.city)}</p>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//   </div>;
//   //
//   ReactDOM.render(templateTwo, document.getElementById("app"));
// };
//
//
// rerender();
//
// // ReactDOM.render(templateTwo, document.getElementById("app"));
