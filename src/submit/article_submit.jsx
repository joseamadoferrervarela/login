import React from 'react'

export function Article_Submit() {

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
        
   
        const saveLocalStorage= e =>{
        e.preventDefault();
        const datos= new FormData(e.target);        
        const data ={email:datos.get("email"),password:datos.get("password")}
        const db=IDBRequest.result;
        const IDBtransaction = db.transaction("users","readwrite");
        const objectStore=IDBtransaction.objectStore("users");
        objectStore.add(data)
        IDBtransaction.addEventListener("complete",()=>{
         console.log("objeto agregado correctamente") 
        })

        }
     
       return (
         <div >
         <h3>ingresa tus datos</h3>
         <form id="formulario" onSubmit={saveLocalStorage}>
           <input name="email" type="text" />
           <input name="password" type="password" />
           <input type="submit"/>
         </form>
         </div>
       )
}

