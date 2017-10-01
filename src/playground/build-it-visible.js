const app = {
butt_vis : false,
text:'show details'
};

const onButtonClick = ()=>{
  app.butt_vis === 'true' ? (app.butt_vis = 'false'): (app.butt_vis = 'true');
  app.text === 'show details' ? (app.text='hide details') : (app.text='show details');
  rerender();
};

const rerender = () => {
  const templateTwo = <div className="container">
    <h1>Visibility Toggle</h1>
    <div visibility={app.butt_vis}> {app.butt_vis}</div>
    <button onClick={onButtonClick}>{app.butt_vis ? 'Hide details' : 'Show details'}</button>
  </div>;
  //
  ReactDOM.render(templateTwo, document.getElementById("app"));
};

rerender();

// ReactDOM.render(templateTwo, document.getElementById("app"));
