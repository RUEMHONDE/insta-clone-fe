import './App.css';
import Login from './Components/Login/Login';
import Story from './Components/Pages/Story/Story';
import { useEffect, useState } from 'react';
import Landing from './Components/Pages/Landing/Landing';
import Feed from "./Components/Pages/Feed/Feed";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Explore from './Components/Pages/Explore/Explore';
function App() {
  
  const [isLoggedin, setLoggedin] = useState(true);
      useEffect(() =>{
        if(localStorage.getItem("token") !=null) {
          setLoggedin(true);
        }
      }, [])
  return (
    <>
      {isLoggedin && ( 
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />}>
      <Route path="/feed" element={<Feed/>}></Route>
      <Route path='/explore' element={<Explore/>}></Route>
      </Route>
      <Route path='/story' element={<Story/>}></Route>
      </Routes>
      </BrowserRouter>
      )}
      {!isLoggedin && <Login/>}
      
    </>
  );
}

export default App;
