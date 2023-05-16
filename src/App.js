import './App.css';
import Login from './Components/Login/Login';
import { useEffect, useState } from 'react';
import Landing from './Components/Pages/Landing/Landing';
function App() {
  
  const [isLoggedin, setLoggedin] = useState(false);
      useEffect(() =>{
        if(localStorage.getItem("token") !=null) {
          setLoggedin(true);
        }
      }, [])
  return (
    <div className="App">
      <>
      {isLoggedin && <>
      <Landing/>
      </>}
      {!isLoggedin && <Login/>}
      </>
    </div>
  );
}

export default App;
