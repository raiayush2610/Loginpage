import { useNavigate } from "react-router-dom";
import "./nouser.css"
const Nouser = () => {
          const navigate = useNavigate();
          return (
                    <div className="user2">
                               <h1>No User is found </h1>
                               <div className="user">
                                         <a href="/Login">Try Again</a>
                               </div>
                                        

                    </div>
         
          )
        };
        
        export default Nouser;