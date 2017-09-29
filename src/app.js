let user =
{ name : "Kamil",
  age : 24,
  city : 'Wroclaw'
};

function getLocation(location) {
return  location ? location : "";
}

function addToCount()
{
  // return user.count++;
  user.age++;
  ReactDOM.render(templateTwo, document.getElementById("app"));
}

let templateTwo = <div className="container">
  <h1 className="{user.name ? 'alert alert-success' : 'alert alert-warning'}" role="alert">{user.name ? user.name : "anonymous"}</h1>
  <p> Age: {user.age}</p>
  <p>{getLocation(user.city)}</p>
  <button onClick={addToCount}></button>
</div>;


ReactDOM.render(templateTwo, document.getElementById("app"));
