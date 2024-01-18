
import {Nav} from './app/nav.jsx'
import {Article} from "./app/article.jsx";

export function App() {
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

