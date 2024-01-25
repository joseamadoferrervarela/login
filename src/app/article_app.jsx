

export function Article_App() {
  const user= sessionStorage.getItem("email");
  
  if(user){
    return (
    <div>
      <h1>Welcome {user}</h1>
      <p>You area suscessfully logged In <a href="#/logout">Logout</a></p>
    </div>   
    )
  }else{
    return(
      <div className="col-12">
        <h3>please Login or Singup</h3>
        <a href="#/submit">submit</a> or {" "}
        <a href="#/login">login</a>
      </div>
    )
  }
  
}
