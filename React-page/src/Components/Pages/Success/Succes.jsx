import axios from "axios";
import "./Success.css"
import Popup from 'reactjs-popup';
import React, { useState, useEffect } from "react";

import {resp} from "../Login/login";
import QRCode from 'qrcode.react';
import { GrShare } from 'react-icons/gr';
import biryani from '../../imgs/biryani.jpg';



let foundEntry = {}
let Profile =  ""
let Cover = { }
let languageString1 = ""
var Base64 = new function() {
  var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  this.encode = function(input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = Base64._utf8_encode(input);
    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }
    return output;
  }

  this.decode = function(input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
      enc1 = keyStr.indexOf(input.charAt(i++));
      enc2 = keyStr.indexOf(input.charAt(i++));
      enc3 = keyStr.indexOf(input.charAt(i++));
      enc4 = keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = Base64._utf8_decode(output);
    return output;
  }

  this._utf8_encode = function(string) {
    string = toString(string).replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
    return utftext;
  }

  this._utf8_decode = function(utftext) {
    var string = "";
    var i = 0;
    var c = 0,
      c1 = 0,
      c2 = 0,
      c3 = 0;
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
    return string;
  }
}()
var btoa = Base64.encode;

function Succes(){
    function refreshPage() {
        window.location.reload(false);
      }
    
    const [entries, setEntries] = useState([]);
    const [qrCodeText, setQRCodeText] = useState('');
    const [imgUrl, setImgUrl] = useState();
  // download QR code
  const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('qrCodeEl')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL)
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  }
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('SamplePDF.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'SamplePDF.pdf';
            alink.click();
        })
    })
  }



    useEffect(() => {
            async function getEntry(){
            try {
                const res = await axios.get("http://localhost:4000/api/usernames").then((res) => setEntries(res.data));
                // console.log(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getEntry();
        }, []);

            entries.forEach(entry =>{
                if(entry.Email === resp)
                    foundEntry = entry
                    console.log(foundEntry);
                    languageString1 = JSON.stringify("Name:"+foundEntry.Name+","+"Age:"+foundEntry.Age+","+"Email:"+foundEntry.Email);
                    console.log(entries);
                    // console.log(foundEntry.Coverimg.data);
            })
           
            // var imageBlod=foundEntry.Coverimg.data
            // var image = `data:image/base64` + btoa(foundEntry.Coverimg.data);
            // var image2 = `data:image/png;base64` + btoa(foundEntry.Coverimg.data);
          //   const reader = new FileReader();
          // // reader.readAsDataURL(imageBlod);
          // reader.onloadend = () => {
          //   const base64data = reader.result;
          //   setImgUrl(base64data);
          // }
          
         
          

    return(
        <>
        
        <div className="main">
            {/* <img src = {imageBlod} alt="food" className="middle-img"/>
            <img src = {image} alt="food" className="middle-img"/>
            <img src={image2}/>
            <img src={image2}/> */}
          
            
                <div style={{ backgroundImage: `url(${biryani})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
                    height:100,width:600  }} className="img-div" >
                    
                </div>
                <div className="success" id="card">
                 
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Basic Info</h5>
                                    {/* <img src = {buf} alt="food" className="middle-img"/>
                                    <img src = {buf} alt="food" className="middle-img"/> */}
                                     
                                    <h6 className="info">First Name:  </h6> <p className="info">{foundEntry.Name}</p><br/>
                                    <h6 className="info">Age  </h6> <p className="info">{foundEntry.Age}</p><br/>
                                    <h6 className="info">Birth </h6> <p className="info">{foundEntry.Birth}</p><br/>
                                    
                                    <h6 className="info">Email:  </h6> <p className="info">{foundEntry.Email}</p><br/>
                                  
                                    <Popup trigger={<GrShare /> } style={{marginRight: 5530 }}  >
                                      
                                        <QRCode id="qrCodeEl"size={150} value={languageString1} />
                                          <input type="button" className="download-btn" onClick={downloadQRCode} value="Download" download />
                                       
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
    