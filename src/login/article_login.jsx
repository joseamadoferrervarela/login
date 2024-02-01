import {useState} from 'react'

export function Article_Login() {
   const [message, setMessage] = useState("")
  const IDBRequest= indexedDB.open("mibaserose", 1);

  IDBRequest.addEventListener("upgradeneeded",()=>{
    const db=IDBRequest.result;
    db.createObjectStore("users",{
       autoIncrement:true
    })
  })

  IDBRequest.addEventListener("success",()=>{
    console.log("todo salio correctamente");
  })

  IDBRequest.addEventListener("error",()=>{
  console.log("ocurrio un error creando la base de datos")
  })
  

  const checkLocalStorage=e=>{
        e.preventDefault();
      
        const datos= new FormData(e.target);
        

        const db=IDBRequest.result;
        const IDBtransaction = db.transaction("users","readonly");
        const objectStore=IDBtransaction.objectStore("users");
        const cursor = objectStore.openCursor();
        cursor.addEventListener("success",()=>{

          if (cursor.result) {
            // console.log(cursor.result.value)
            if (datos.get("email") == cursor.result.value.email && datos.get("password")== cursor.result.value.password) {
              sessionStorage.setItem("email", datos.get("email"));
              location.href='#/'    
            }  
            
            cursor.result.continue() 
          }else{
             setMessage("los datos que introduciste son incorrectos")
         }     

        })
     
     }
     
       return (
         <div >
         <h3>ingresa tus datos para iniciar sesion</h3>
         <form id="formulario" onSubmit={checkLocalStorage}>
           <input name="email" type="text" />
           <br />
           <input name="password" type="password"/>
           <br />
           <input type="submit" value="iniciar"/>
           
           <small>{message}</small>
         </form>
         </div>
       )
}
