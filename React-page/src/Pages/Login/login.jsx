import "./login.css";
import React,{ useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
let resp = ' ';




// /Login this login page

const Login = () =>{
          const [Email,setEmail] = useState( );
          const [Password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
                try { 
                    const res = await axios.post(`http://localhost:4000/api/user`,
                    {
                        Email:Email,
                        Password:Password
                    })
                    // console.log(res.data);
                    
                    if (res.data == null) {
                        navigate("/Nouser");
                    }else{
                        var username = res.data.Email;
                        var password = res.data.Password;
                        
                        if ( username=== Email) {
                            if (Password === password) {
                                // console.log(username);
                                resp = Email;
                                navigate("/Sucees");

                                console.log("yes");
                                                              
                            }else{
                                navigate('/Err')
                                // console.log("ni");
                            }
                            
                        }
                       
                        
                        
                        
                    }

            
        } catch (error) {
            console.log(error);
            
        }
    }

    
          return(
            <>
                <main class="form-signin ">
                    <form >
                        <h1 class="h3 mb-3 mb-4 fw-normal"><small><strong>Loging Page:-</strong></small></h1>

                        <div class="form-floating">  
                        <input type="email" onChange={e => {setEmail(e.target.value)}} class="form-control  bottom" id="floatingemail1" name="username"required autoFocus/>          
                        <label htmlFor="floatingemail1">Email:</label>              
                        </div>
                        <div class="form-floating">   
                        <input type="password" onChange={e => {setPassword(e.target.value)}} id="password" class="form-control bottom" name="password"/>
                        <label htmlFor="password">Password:</label>
                        </div>   
                        {(Email == null) ? <span>please enter the details</span> : null}
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