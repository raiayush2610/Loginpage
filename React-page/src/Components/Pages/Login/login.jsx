import "./login.css";
import React,{ useState } from "react";
import axios from "axios";
import toast from '../index';
import ToastContainer from '../index2'
// import 'react-toastify/dist/ReactToastifly.css';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";
let resp = ' ';





// /Login this login page

const Login = () =>{
          const [Email,setEmail] = useState( );
          const [Password, setPassword] = useState('');
          const [pas,setpas] = useState(null);
          const [Epas,setEpas] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
                try { 
                    const res = await axios.post(`http://localhost:4000/api/user`,
                    {
                        Email:Email,
                        Password:Password
                    })
                    console.log(res.data);
                    if(res.data === "no"){
                        setEpas(1);
                        }
                     if  (res.data ==="false") {
                        return toast.error("Password is Incorrect")
                     
                     } 

                        else{
                            if(res.data=== Email){
                                resp = Email
                                navigate("/Sucees");
                                // console.log("yes");
                            }else{
                                return toast.error("Password is Incorrect")
                                
                            }}     
                 } catch (error) {console.log(error);}
    }
          return(
            <>
                <main class="form-signin ">
                    <ToastContainer position="bottom-center" limit={1}/>
                    <form >
                        <h1 class="h3 mb-3 mb-4 fw-normal"><small><strong>Loging Page:-</strong></small></h1>

                        <div class="form-floating">  
                        
                        <input type="email" onChange={e => {setEmail(e.target.value)}} class="form-control  bottom" id="floatingemail1" name="username"required autoFocus/>          
                        <label htmlFor="floatingemail1">Email:</label>  
                        {(Email == null) ? <span>please enter the details</span> : <span></span>} 
                         {(Epas != null) ? <span>Email is incorrect </span> : <span></span>}          
                        </div>
                        <div class="form-floating">   
                        <input type="password" onChange={e => {setPassword(e.target.value)}} id="password" class="form-control bottom" name="password"/>
                        <label htmlFor="password">Password:</label>
                        {(pas != null) ? <span>password is incorrect </span> : <span></span>}
                        </div>   
                        
                        <button type="submit" onClick={handleLogin} class="w-100 btn btn-lg btn-danger">Login</button>
                    </form>
                        <div class="container signin">
                            <p><b>Sign to to new  account? <a href="/Login">Sign up</a></b>.</p>
                            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                        </div>
                </main>
            </>
          )   
          
          
          
}
         
export default Login;
export{resp};