import axios from "axios";
import "./Success.css"
import Popup from 'reactjs-popup';
import React, { useState, useEffect } from "react";
import {resp} from "../Login/login";
import {QRCodeSVG} from 'qrcode.react';
import { GrShare } from 'react-icons/gr';
import biryani from '../../imgs/biryani.jpg';
let foundEntry = {}
function Succes(){
    
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
        if(entry.Email === resp)
            foundEntry = entry
      })
      console.log(foundEntry);

   
        
    return(
        <>
        <div className="main">
                <div style={{ backgroundImage: `url(${biryani})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
                    height:600,width:600  }} className="img-div" >
                    
                </div>
                <div className="success" id="card">
                    {/* <SuccessHeader name = {(foundEntry.fName)}/> */}
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Basic Info</h5>
                                    <img src = {biryani} alt="food" className="middle-img"/>
                                    <h6 className="info">First Name:  </h6> <p className="info">{foundEntry.Name}</p><br/>
                                    <h6 className="info">Age  </h6> <p className="info">{foundEntry.Age}</p><br/>
                                    <h6 className="info">Birth </h6> <p className="info">{foundEntry.Birth}</p><br/>
                                    
                                    <h6 className="info">Email:  </h6> <p className="info">{foundEntry.Email}</p><br/>
                                   
                                        <Popup trigger={<GrShare /> } >
                                        <div><QRCodeSVG className="qrcode" value={foundEntry} /></div>
                                        </Popup>
                                                       
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Button trigger modal --> */}
                
        </div>   
                
    </>
    )
    
       
          
              }
     
     export default Succes;
    