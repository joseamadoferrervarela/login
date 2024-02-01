
import {Nav} from './all/nav.jsx'
import {Article_App} from "./app/article_app.jsx";
import { Particulas } from "./particulas.jsx";
export function App() {

  if (sessionStorage.getItem("username")) {
    location.href='#/sas'
  }
  return (
    <div className="container">
      <Particulas></Particulas>
      <div className="row ">
        <Nav/>
      </div>
      <div className="row">
        <Article_App/>
      </div>
    </div>
  )
}

