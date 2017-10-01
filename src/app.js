const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer',
  options: ['One', 'Two'],
  decision:0
};

function getLocation(location) {
  return location
    ? location
    : "";
}

const addToList = (e) => {
  e.preventDefault();
  // rerender();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
  }

  rerender();
};

const onRemoveAll = (e) => {
  app.options = [];
  rerender();
};

const onMakeDecision = ()=>{
  const randomNum = Math.floor(Math.random() * app.options.length);
  app.decision = randomNum;
  rerender();
  console.log(randomNum);
};
// Works but map is more pretty :)
// const items = () => {
//   let alist =[];
//   app.options.forEach((oObj,index) =>{
//   alist.push( <li key={index}>{oObj}</li>);
//   // return <li>{oObj}</li>;
//   });
//
//   // rerender();
//    return alist;
// };

const rerender = () => {
  const templateTwo = <div className="container">
    <h1>Indecision App</h1>
    <div>Put your life in the hands of a computer</div>
    <button disabled={app.options.length > 0} onClick={onMakeDecision}></button>
    <button onClick={onRemoveAll}></button>
    <form onSubmit={addToList}>
      <input type="text" name="option"></input>
      <button>Add button</button>
    </form>
    <ul>
    {app.options.map((oObj)=>{return <li>{oObj}</li>;})}
   </ul>
   <div>Your decision is: {app.options[app.decision]}</div>
  </div>;
  //
  ReactDOM.render(templateTwo, document.getElementById("app"));
};

rerender();

// ReactDOM.render(templateTwo, document.getElementById("app"));
