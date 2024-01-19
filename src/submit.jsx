

export function Submit() {

const saveLocalStorage= e =>{
   e.preventDefault();
   const datos= new FormData(e.target);
   localStorage.setItem("username", datos.get("username"));
   localStorage.setItem("contraseña", datos.get("contraseña"));
   location.href='#/login'
}

  return (
    <div >
    <h3>ingresa tus datos</h3>
    <form id="formulario" onSubmit={saveLocalStorage} action="" method="POST">
      <input name="username" type="text" />
      <input name="contraseña" type="password" />
      <input type="submit"/>
    </form>
    </div>
  )
}
