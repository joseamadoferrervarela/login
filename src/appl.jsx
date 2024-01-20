
import {Nav} from './app/nav.jsx'
import {Article} from "./app/article.jsx";

export function App() {

  if (sessionStorage.getItem("username")) {
    location.href='#/sas'
  }
  return (
    <div className="container">
      <div className="row border">
        <Nav/>
      </div>
      <div className="row border">
        <Article/>
      </div>
    </div>
  )
}

