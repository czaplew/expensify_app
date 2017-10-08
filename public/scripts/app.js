"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.addOne = _this.addOne.bind(_this);
    _this.minusOne = _this.minusOne.bind(_this);
    // this.counter = 0;
    _this.state = { age: 0 };
    return _this;
  }
  // Old version of changing state


  _createClass(Counter, [{
    key: "addOne",
    value: function addOne() {
      this.setState({ age: this.state.age + 1 });
    }
  }, {
    key: "minusOne",
    value: function minusOne() {
      this.setState(function (prevState) {
        return { age: prevState.age - 1 };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "Age: ",
          this.state.age
        ),
        React.createElement(
          "button",
          { onClick: this.addOne },
          "+1"
        ),
        React.createElement(
          "button",
          { onClick: this.minusOne },
          "-1"
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById("app"));

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
