

export function Login() {

const checkLocalStorage=e=>{
   e.preventDefault();
   const datos= new FormData(e.target);
   const user= localStorage.getItem("username");
   const pass= localStorage.getItem("contraseña");

   if (datos.get("username")== user && datos.get("contraseña")== pass) {
   sessionStorage.setItem("username", datos.get("username"));
   location.href='#/sas'    
   }

}

  return (
    <div >
    <h3>ingresa tus datos</h3>
    <form id="formulario" onSubmit={checkLocalStorage}>
      <input name="username" type="text" />
      <input name="contraseña" type="password" />
      <input type="submit"/>
    </form>
    </div>
  )
}

