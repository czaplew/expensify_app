"use strict";

var user = { name: "Kamil",
  age: 24,
  city: 'Wroclaw'
};

function getLocation(location) {
  return location ? location : "";
}

function addToCount() {
  // return user.count++;
  user.age++;
  ReactDOM.render(templateTwo, document.getElementById("app"));
}

var templateTwo = React.createElement(
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
  React.createElement("button", { onClick: addToCount })
);

ReactDOM.render(templateTwo, document.getElementById("app"));
