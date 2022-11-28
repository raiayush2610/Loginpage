import React  from "react";


import Home from './Pages/Home/home';
import Admin from './Pages/Admin/admin';
import Login from './Pages/Login/login';
import Register from './Pages/Register/register';
import NoPage from './Pages/NoPage/nopage';
import Succes from './Pages/Success/Succes';
import Errr from './Pages/Error/error';
import Nouser from './Pages/noUser/nouser';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar/navbar'
function App() {
          return(
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
          )
}

export default App;