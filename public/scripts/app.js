"use strict";

var user = { name: "Kamil",
  age: 24,
  city: 'Wroclaw'
};

function getLocation(location) {
  return location ? location : "";
}

var template2 = React.createElement(
  "div",
  { className: "container" },
  React.createElement(
    "h1",
    { className: "{user.name ? 'alert alert-success' : 'alert alert-warning'}", role: "alert" },
    user.name ? user.name : "anonymous"
  ),
  React.createElement(
    "p",
    null,
    " Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    getLocation(user.city)
  ),
  React.createElement(
    "ul",
    { "class": "list-group" },
    React.createElement(
      "li",
      { "class": "list-group-item" },
      "First item"
    ),
    React.createElement(
      "li",
      { "class": "list-group-item" },
      "Second item"
    ),
    React.createElement(
      "li",
      { "class": "list-group-item" },
      "Third item"
    )
  )
);

ReactDOM.render(template2, document.getElementById("app"));
