'use strict';

var app = {
  butt_vis: false,
  text: 'show details'
};

var onButtonClick = function onButtonClick() {
  app.butt_vis === 'true' ? app.butt_vis = 'false' : app.butt_vis = 'true';
  app.text === 'show details' ? app.text = 'hide details' : app.text = 'show details';
  rerender();
};

var rerender = function rerender() {
  var templateTwo = React.createElement(
    'div',
    { className: 'container' },
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'div',
      { visibility: app.butt_vis },
      ' ',
      app.butt_vis
    ),
    React.createElement(
      'button',
      { onClick: onButtonClick },
      app.butt_vis ? 'Hide details' : 'Show details'
    )
  );
  //
  ReactDOM.render(templateTwo, document.getElementById("app"));
};

rerender();

// ReactDOM.render(templateTwo, document.getElementById("app"));
