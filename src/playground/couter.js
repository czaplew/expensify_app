let user =
{ name : "Kamil",
  age : 24,
  city : 'Wroclaw'
};

function getLocation(location) {
return  location ? location : "";
}

const addOne = ()=>{
  user.age++;
  rerender();
};

const minusOne = ()=>{
  user.age--;
  rerender();
};



const rerender = () => {
  const templateTwo = <div className="container">
    <h1 className="{user.name ? 'alert alert-success' : 'alert alert-warning'}" role="alert">{user.name ? user.name : "anonymous"}</h1>
    <p> Age: {user.age}</p>
    <p>{getLocation(user.city)}</p>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
  </div>;
  //
  ReactDOM.render(templateTwo, document.getElementById("app"));
};


rerender();

// ReactDOM.render(templateTwo, document.getElementById("app"));
