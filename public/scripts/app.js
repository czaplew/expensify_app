"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleAddOptions = _this.handleAddOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("componentDidMount");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "handleAddOptions",
    value: function handleAddOptions(oObj) {
      // this.setState((prevState)=>{return {prevState.options.push(oObj)};});
      if (!oObj) {
        return "Put smth into input";
      } else if (this.state.options.indexOf(oObj) > -1) {
        return 'This option already exists';
      } else {
        this.setState(function (prevState) {
          return {
            options: prevState.options.concat(oObj)
          };
        });
      }
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision";
      var subtitle = "Put your life in the hands of a computer";
      // const options = ["Thing one","Thing two", "Thing three"];
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0, onClick: this.handlePick }),
        React.createElement(Options, { options: this.state.options, handleDeleteOption: this.handleDeleteOption, handleDeleteOptions: this.handleDeleteOptions }),
        React.createElement(AddOption, { handleAddOptions: this.handleAddOptions })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: ['smth']
};

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "h1",
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: "Indecision",
  subtitle: "Put your life in the hands of a computer"
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { disabled: !props.hasOptions, onClick: props.onClick },
      "What should I do"
    )
  );
};

var Options = function Options(props) {

  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove all options"
    ),
    React.createElement(
      "h1",
      null,
      "Options"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleDeleteOption: props.handleDeleteOption

      });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.optionText,
    React.createElement(
      "button",
      { onClick: function onClick() {
          props.handleDeleteOption(props.optionText);
        } },
      "Remove"
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOptions = _this2.handleAddOptions.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOptions",
    value: function handleAddOptions(e) {
      e.preventDefault();
      // rerender();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOptions(option);
      if (error) {
        this.setState(function () {
          return { error: error };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          "handleAddOptions"
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOptions },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            { type: "submit" },
            "Add button"
          )
        ),
        !!this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var User = function User(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Name: ",
      props.name
    ),
    React.createElement(
      "p",
      null,
      "Age: ",
      props.age
    )
  );
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

// // const emailjs = require("emailjs");
//
// const app = {
//   title: 'Indecision App',
//   subtitle: 'Put your life in the hands of computer',
//   options: ['One', 'Two'],
//   decision:0
// };
// function sendMail(e)
// {
//   e.preventDefault();
//   $.ajax({
//     type: "POST",
//     url: "https://mandrillapp.com/api/1.0/messages/send.json",
//     data: {
//       'key': 'NiDEYZJfdOPa2CdsOb-TOw',
//       'message': {
//         'from_email': 'punczoll@o2.pl',
//         'to': [
//             {
//               'email': 'kczaplew0@gmail.com',
//               'name': 'RECIPIENT NAME (OPTIONAL)',
//               'type': 'to'
//             }
//           ],
//         'autotext': 'true',
//         'subject': 'YOUR SUBJECT HERE!',
//         'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
//       }
//     }
//    }).done(function(response) {
//      console.log(response); // if you're into that sorta thing
//    });
// };
//
// function getLocation(location) {
//   return location
//     ? location
//     : "";
// };
//
// const addToList = (e) => {
//   e.preventDefault();
//   // rerender();
//   const option = e.target.elements.option.value;
//   if (option) {
//     app.options.push(option);
//   }
//
//   rerender();
// };
//
// const onRemoveAll = (e) => {
//   app.options = [];
//   rerender();
// };
//
// const onMakeDecision = ()=>{
//   const randomNum = Math.floor(Math.random() * app.options.length);
//   app.decision = randomNum;
//   rerender();
//   console.log(randomNum);
// };
// // Works but map is more pretty :)
// // const items = () => {
// //   let alist =[];
// //   app.options.forEach((oObj,index) =>{
// //   alist.push( <li key={index}>{oObj}</li>);
// //   // return <li>{oObj}</li>;
// //   });
// //
// //   // rerender();
// //    return alist;
// // };
//
// const buttons = {
//   visibility:true
// };
// const rerender = () => {
//   const templateTwo = <div className="container">
//     <h1>Indecision App</h1>
//     <div>Put your life in the hands of a computer</div>
//     <ul>
//       <button visibility={buttons.visibility} onClick={onRemoveAll}> Poniedziałek, 19:00 </button>
//       <button visibility={buttons.visibility} onClick={onRemoveAll}> Wtorek, 19:00 </button>
//       <button visibility={buttons.visibility} onClick={onRemoveAll}> Sobota, wieczorem</button>
//       <button visibility={buttons.visibility} onClick={onRemoveAll}> Niedziela, do uzg. </button>
//       <button visibility={buttons.visibility} onClick={onRemoveAll}> Nie mam zdania (czyt. chyba oszalałeś, nigdzie z Tobą nie pójdę) </button>
//       <button visibility={buttons.visibility} onClick={onRemoveAll}> Losuj </button>
//     </ul>
//
//     <div>Twój wybór to : {buttons.choice}</div>
//     <form onSubmit={sendMail}>
//       <input type="text" name="option"></input>
//       <button>Wyślij odpowiedź</button>
//     </form>
//   </div>;
//   //
//   ReactDOM.render(templateTwo, document.getElementById("app"));
// };
//
// rerender();
//
// // ReactDOM.render(templateTwo, document.getElementById("app"));
