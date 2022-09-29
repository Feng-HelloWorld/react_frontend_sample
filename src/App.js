import { Link } from "react-router-dom"
import Routing from "./Routing"
import "./App.css"
import logo from "./levvel-logo.svg"

function App() {
  console.log("App")
  return (
    <>
      <div className="header">
        <div className="icon">
          <Link to="/home">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>
      </div>
      <div className="App">
        <Routing />
      </div>
    </>
  )
}

export default App
