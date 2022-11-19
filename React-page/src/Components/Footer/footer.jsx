import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
 import{faCopyright} from '@fortawesome/free-solid-svg-icons';
const Footer = () =>{
    return (
    <div className="footer">
    <FontAwesomeIcon className="copy-icon" icon={faCopyright}/><p className="copyright">Copyright Ayush Rai</p>
      
   <a href="https://www.facebook.com/"><FontAwesomeIcon className="icon" icon={faFacebook}></FontAwesomeIcon></a> 
   <a href="https://www.instagram.com/?hl=en"><FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon></a>
   <a href="https://twitter.com/"><FontAwesomeIcon className="icon" icon={faTwitter}></FontAwesomeIcon></a>
    <h1>this footer</h1>

    </div>
    )

}
export default Footer;