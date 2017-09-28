let user =
{ name : "Kamil",
  age : 24,
  city : 'Wroclaw'
};

function getLocation(location) {
return  location ? location : "";
}


let template2 = <div className="container">
  <h1 className="{user.name ? 'alert alert-success' : 'alert alert-warning'}" role="alert">{user.name ? user.name : "anonymous"}</h1>
  <p> Age: {user.age}</p>
  <p>{getLocation(user.city)}</p>
  <ul class="list-group">
    <li class="list-group-item">First item</li>
    <li class="list-group-item">Second item</li>
    <li class="list-group-item">Third item</li>
  </ul>
</div>;


ReactDOM.render(template2, document.getElementById("app"));
