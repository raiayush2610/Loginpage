import {  useState } from "react";
import "./register.css";
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Register () {
    function refreshPage() {
        window.location.reload(false);
      }
   
          const [Name,setFname] = useState('');
          const [Age,setAge] = useState('');
          const [Birth,setBirth] = useState('');
          const [Profileimg,setProfile] = useState();
          const [Coverimg,setCprofile] = useState(null);
          const [Email,setEmail] = useState( );
          const [Password, setPassword] = useState();
         
          const[usernames,setusernames] = useState([]);

        const uploadProfile = (e) =>{
            console.log("uploding......");
            setProfile(e.target.files[0]);
            // console.log(e.target.files[0]);
   
        }
        const uploadCprofile = (e) =>{
            console.log("uploding......");
            // console.log(e.target.files[0]);
            setCprofile(e.target.files[0])
           

        }
          const addItem = async(e) =>  {
                    // e.preventDefault();
                    // http://localhost:4000/api/username
                    let url=` http://localhost:4000/api/username`
                    try {
                        
                        const formdata = new FormData();
                        formdata.append('fullName', Name)
                        formdata.append('age', Age)
                        formdata.append('birth',Birth)
                        formdata.append('Profileimg',Profileimg)
                        formdata.append('Coverimg',Coverimg)
                        formdata.append('username',Email)
                        formdata.append('password',Password)
                        // console.log("hello ");
                        // console.log(formdata);
                        const res = await axios.post(url,formdata)

                            // console.log(res.formdata);
                            // setusernames((prev)=> [...prev,res.formdata]);                              
                           
                              console.log(usernames);

                    } catch (error) {
                              console.log(error);
                    }
        }
       
     return ( 
     <>
           <main className="form-signin " autoComplete="off">
                    <form >    
                        <h1 className="h3 mb-3 mb-4 fw-normal">Register </h1>  

                        <div className="form-floating">
                        <input type="name" name="fullName" className="form-control bottom"  autoComplete="off"  onChange={(e)=>{setFname(e.target.value)}} id="fullName" placeholder="Full name:" required autoFocus/>
                        <label htmlFor="fullName">FULL Name</label>
                        </div>
                        <div className="form-floating">
                        <input type="number" name="age" className="form-control bottom"  autoComplete="off"  onChange={(e)=>{setAge(e.target.value)}} id="age" placeholder="Age" />
                        <label htmlFor="age">Age</label>
                        </div>
                        <div className="form-floating">
                        <input type="Date" name="birth" className="form-control bottom"  autoComplete="off"  onChange={(e)=>{setBirth(e.target.value)}} id="birth" placeholder="Date of birth" />
                        <label htmlFor="birth">Date of birth</label>
                        </div>
                          
                        
                        <div className="form-floating">
                            <input type="file" name="Profile_img" className="form-control file bottom" autoComplete="off" onChange={uploadProfile}  id="profile"  />
                            {(Profileimg == null) ?  <span>Please upload the File</span> : <span>The File is upload</span>}
                            <label htmlFor="profile">Select you profile pic</label>
                        </div>
                        <div className="form-floating img spa">
                            <input type="file" name="Cover_img" className="form-control bottom" autoComplete="off" onChange={uploadCprofile}   id="Cover_img"  />
                            {(Coverimg == null) ?  <span>Please upload the File</span> : <span>The File is upload</span>}
                            <label htmlFor="Cover_img">Select you cover pic</label>
                        </div>
                        
                        <div className="form-floating imgspa">
                            <input type="email" name="username" className="form-control bottom" autoComplete="off"  onChange={(e)=>{setEmail(e.target.value)}} id="email"/>
                            <label htmlFor="email">Email:</label>
                        </div>
                        <div className="form-floating ">
                            <input type="password" name="password" className="form-control bottom" autoComplete="off"  onChange={(e)=>{setPassword(e.target.value)}}  id="password" />
                            <label htmlFor="password">Password:</label>
                        </div>
                        <div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={e => {addItem(e.preventDefault()); refreshPage()}} ><NavLink to = "/Login">submit</NavLink> </button>
                        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                        </div>    
                        <div className="container signin">
                        <p><b>Already have an account? <a href="/Login"> Sign in</a></b>.</p>
                        </div>
                        <p className="mt-5 mb-3 text-muted">&copy; Register</p>
                    </form>
                </main>
   
     </>
     
)}
    
export default Register;