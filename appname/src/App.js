import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Courses  from "./Courses";
import "./style3.css"
import "./style1.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
function App(){
  return(
    <>
     <h1 className="head">MOURI Tech</h1>
    <BrowserRouter>
    <div className=" container-fluid">
 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link  to="/" className="navbar-brand ">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link to="/About" className="Lk">About</Link>
      </li>
      <li className="nav-item">
      <Link to="/Courses">Courses</Link>
      </li>
      <li className="nav-item">
      <Link to="/Services" className="Lk">Services</Link>
      </li>
    </ul>
  </div>
</nav>
    {/* .................................. */}
    <div className="row">  
       <div className="col-lg-2">
     <h1>Mercy</h1>
  </div>
    <div className="col-lg-10">
    <Routes>
       <Route path="/About" element={<About/>}/> 
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Courses" element={<Courses/>}/>
    </Routes>
  </div>
</div>
{/* .................... */}
      <div className="row">
      <div className="col-lg-12">
      <p className="bg-dark text-light text-center p-3">CopyRight@gmail.com</p>
    </div>
    </div>
    </div>
    </BrowserRouter>
    </>
  )
}
export default App;