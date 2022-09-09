import React from 'react';
import './App.css';
// import { useParams } from "react-router";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

const Hello = (props) => {
  return (
    <><h1 style={{color: "red"}}>The word is: Hello</h1>
      {/* <a href="/about">Go to About</a> */}
      <Link to={"/hello/blue/red"}>Go to Colorful Hello</Link> | <Link to={"/home"}>Go to Home</Link> | <Link to={"/4"}>Go to Four</Link></>
  );
}

const Home = (props) => {
  return (
    <><h1 style={{color: "blue"}}>Welcome!</h1>
    <Link to={"/hello/blue/red"}>Go to Colorful Hello</Link> | <Link to={"/hello"}>Go to Hello</Link> | <Link to={"/4"}>Go to Four</Link></>
  );
}

const Four = (props) => {
  return (
    <><h1 style={{color: "purple"}}>The number is: 4</h1>
    <Link to={"/home"}>Go to Home</Link> | <Link to={"/hello/blue/red"}>Go to Colorful Hello</Link> | <Link to={"/hello"}>Go to Hello</Link></>
  );
}

const HelloColor = (props) => {
  return (
    <><h1 style={{color: "blue", backgroundColor: "coral"}}>The word is: Hello</h1>
    <Link to={"/home"}>Go to Home</Link> | <Link to={"/hello"}>Go to Hello</Link> | <Link to={"/4"}>Go to Four</Link></>
  );
}
// const Location = (props) => { 
//   const { city } = useParams(); // matches our :city in our Routes
    
//   return (
//     <h1>Welcome to { city }!</h1>
//   );
// }

function App() {
  return (
    <div className='App'>
      {/* <h1>Routing Example</h1> */}
      <Routes>
        <Route path="/hello" element={<Hello/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/4" element={<Four/>}/>
        <Route path="/hello/blue/red" element={<HelloColor/>}/>
      </Routes>
      {/* <p>
        <Link to="/location/Seattle">Seattle</Link>
          | 
        <Link to="/location/Chicago">Chicago</Link>
          | 
        <Link to="/location/Burbank">Burbank</Link>
      </p>
      <Routes>
        <Route path="/location/:city" element={<Location />}/>
      </Routes> */}
    </div>
  );
}

export default App;
