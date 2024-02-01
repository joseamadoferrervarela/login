import { useFormik } from "formik";
import * as Yup from "yup";


export function Article_Submit() {

        
        const initialValues={
          email:'',
          password :''
        }

        const validationSchema=Yup.object({
          email:Yup.string().email("ingresa un email valido").required("el campo es requerido"),
          password:Yup.string().min(5,"minimo 5 caracterres").max(10,"maximo 10 caracteres").required("el campo es requerido")
        })
        
        const onSubmit=  (values)=>{
          
          const IDBRequest= indexedDB.open("mibaserose", 1);
        
          IDBRequest.addEventListener("upgradeneeded",()=>{
            console.log("la base de datos se creo correctamente");

            const db=IDBRequest.result;
            db.createObjectStore("users",{
               autoIncrement:true
            })
          })
          
          IDBRequest.addEventListener("success",()=>{
            console.log("la base de datos se abrio correctamente");
            const data ={email:values.email,password:values.password}
            const db= IDBRequest.result;
            const IDBtransaction = db.transaction("users","readwrite");
            const objectStore=IDBtransaction.objectStore("users");
            objectStore.add(data);
            IDBtransaction.addEventListener("complete",()=>{
            location.href='#/login' 
            })
            
          })
  
          IDBRequest.addEventListener("error",()=>{
          console.log("ocurrio un error creando la base de datos")
          })
  

          }

        const {handleChange, errors, handleSubmit}=useFormik({
          initialValues,
          onSubmit,
          validationSchema
        })   

         return (
           <div >
           <h3>ingresa tus datos para crear una cuenta</h3>
           <form id="formulario" onSubmit={handleSubmit}>
             <input autocomplete="off" name="email" type="text"  onChange={handleChange} />
             <p className="error">{errors?.email}</p>
             <input autocomplete="off" name="password" type="password" onChange={handleChange}/>
             <p className="error">{errors?.password}</p>
             <input type="submit" value="crear"/>
           </form>
           </div>
         )


      
}

