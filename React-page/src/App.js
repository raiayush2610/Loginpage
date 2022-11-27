import  ReactDOM from 'react-dom/client';
import './App.css';
import {  Footer , Navbar } from "./Components";
import {Home,  Admin,  Register, NoPage, Login ,Succes,Errr,Nouser} from './Pages';
// import Order from './Order';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById("root")
)

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/admin" element = {<Admin/>}/>        
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/Register" element = {<Register/>}/>
        <Route path = "/Sucees" element = {<Succes/>}/>
        <Route path = "/Err" element = {<Errr/>}/>
        <Route path = "/Nouser" element = {<Nouser/>}/>
        <Route path= '*' element ={<NoPage/>}/>
      </Routes>
       {/* <Footer/> */}
    </Router>
    
    </>
  );
}

export default App;
