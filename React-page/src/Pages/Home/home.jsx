
import "./home.css";
import { BiAtom } from "react-icons/bi";

const Home = () =>{
    
     return <>
      <div class="jumbotron centered main-page">
  <div class="container">
    <div className="icon"><BiAtom size="200px" />
    </div>
    
    <i class="fa-solid fa-hospital fa-6x botom"></i>
    <h1 class="display-3"></h1>
    <p class="lead">Join more to save Explore more </p>
    <hr/>
    <a class="btn btn-success btn-lg" href="/Register" role="button">Register </a>
    <a class="btn btn-success btn-lg" href="/Login" role="button">Login </a>
     
   

  </div>
</div>
     
     
     </>
    
     
     
         }

export default Home;