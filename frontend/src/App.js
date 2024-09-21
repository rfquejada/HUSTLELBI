
import { Routes, Route } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile"
import BuildClient from "./Pages/BuildClient";
import BuildFreelancer from "./Pages/BuildFreelancer";
import Jobs from "./Pages/Jobs";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
// import "./index.css";

function App() {
  return (
    <div className="App">
        <Routes>


        <Route path="/" element={<Root/>}>

            <Route path="/" element={<Home/>}/>
            <Route path="/jobs" element={<Jobs/>}/>
            <Route path="/BuildClient" element = {<BuildClient/>}/>
            <Route path="/BuildFreelancer" element = {<BuildFreelancer/>}/>
            <Route path="/profile/:id" element = {<Profile/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>


        </Route>
        </Routes>
          
  

       
    </div>
  );
}

export default App;
