import axios from "axios";
import "./Success.css"
import Popup from 'reactjs-popup';
import React, { useState, useEffect } from "react";
import {resp} from "../Login/login";
import {QRCodeSVG} from 'qrcode.react';
import { GrShare } from 'react-icons/gr';
let foundEntry = {}
function Succes(){
    const [Fname,setFname] = useState('');
    const [Age,setAge] = useState('');
    const [Birth,setBirth] = useState('');
    const [Profile_img,setProfile] = useState(null);
    const [Cover_img,setCprofile] = useState(null);
    const [Email,setEmail] = useState( );
    const [Password, setPassword] = useState();
    const [entries, setEntries] = useState([]);
    useEffect(() => {
            async function getEntry(){
            try {
                const res = await axios.get("http://localhost:4000/api/usernames")
                setEntries(res.data)
                // console.log(resp);
            } catch (error) {
                console.log(error)
            }
        }
        getEntry();
      }, []);
      console.log(resp);
      entries.forEach(entry =>{
        if(entry.Email ===resp)
            foundEntry = entry
      })
      console.log(foundEntry);

   
        
    return(
        <>
        
        <div className="success">
            {/* <SuccessHeader name = {(foundEntry.fName)}/> */}
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Basic Info</h5>
                            <h6 className="info">First Name:  </h6> <p className="info">{foundEntry.Name}</p><br/>
                            <h6 className="info">Age  </h6> <p className="info">{foundEntry.Age}</p><br/>
                            <h6 className="info">Birth </h6> <p className="info">{foundEntry.Birth}</p><br/>
                            
                            <h6 className="info">Email:  </h6> <p className="info">{foundEntry.Email}</p><br/>
                            <div class="nav-item dropdown">
                        </div>                        
                    </div>
                </div>
                </div>
            </div>
        </div>
            
        {/* <!-- Button trigger modal --> */}
        
            <Popup trigger={<GrShare /> } position="right center">
                <div><QRCodeSVG value={foundEntry} /></div>
            </Popup>
                
    </>
    )
    
       
          
              }
     
     export default Succes;
    