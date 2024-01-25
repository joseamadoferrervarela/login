
import {Nav} from './all/nav.jsx'
import {Article_App} from "./app/article_app.jsx";

export function App() {

  if (sessionStorage.getItem("username")) {
    location.href='#/sas'
  }
  return (
    <div className="container">
      <div className="row ">
        <Nav/>
      </div>
      <div className="row">
        <Article_App/>
      </div>
    </div>
  )
}

