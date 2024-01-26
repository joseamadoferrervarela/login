import { useFormik } from "formik";
import * as Yup from "yup";


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

        
        // const initialValues={
        //   email:'',
        //   password :''
        // }

        // const validationSchema=Yup.object({
        //   email:Yup.string().email("debes introducir un email valido").required("el campo es requerido"),
        //   password:Yup.string().min(5,"minimo 5 caracterres").max(10,"maximo 10 caracteres").required("el campo es requerido")
        // })
        
        // const onSubmit=  (values)=>{
          
        //     const data ={email:values.email,password:values.password}
        //     const db= IDBRequest.result;
        //     const IDBtransaction = db.transaction("users","readwrite");
        //     const objectStore=IDBtransaction.objectStore("users");
        //     objectStore.add(data);
        //     IDBtransaction.addEventListener("complete",()=>{
        //     location.href='#/login' 
        //     })
        //   }

        // const {handleChange, errors, handleSubmit}=useFormik({
        //   initialValues,
        //   onSubmit,
        //   validationSchema
        // })   

        const saveLocalStorage = e =>{
        e.preventDefault();
        const datos= new FormData(e.target);        
        const data ={email:datos.get("email"),password:datos.get("password")}
        const db=IDBRequest.result;
        const IDBtransaction = db.transaction("users","readwrite");
        const objectStore=IDBtransaction.objectStore("users");
        objectStore.add(data)
        IDBtransaction.addEventListener("complete",()=>{
         location.href='#/login' 
         
        })

        }
     
       return (
         <div >
         <h3>ingresa tus datos para crear una cuenta</h3>
         <form id="formulario" onSubmit={saveLocalStorage}>
           <input name="email" type="text" />
           {/* <small>{errors?.email}</small> */}
           <input name="password" type="password"  />
           {/* <small>{errors?.password}</small><br /> <br /> */}
           <input type="submit" value="crear"/>
         </form>
         </div>
       )
}

