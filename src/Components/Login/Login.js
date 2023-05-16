import React, { useState } from 'react'
import "./login.css";
import phone from "../../../src/phone.jpg";
import instapic from "../../../src/instapic.png";
import playstore from "../../../src/playstore.png";
import axios from "axios";
export default function Login() {
  
  const [formData, setformData] = useState({});
  const handleChange = (e)=>{
    setformData((prev)=>({
      ...prev, [e.target.name]:e.target.value,
    }))
  };
  const signin = async ()=>{
    // console.log(formData);
    const resp = await axios.post("http://localhost:8080/login", formData);

    if(resp.data.status==200)
    {
      console.log("login successfull");
      localStorage.setItem("token", resp.data.token);
    }
  };

  return (
    <div>
      <div className='main-container'>
      <div className='mobile-carousel'>
        <img src={phone}/>
      </div>
      <div className='login-container'>
      <div className='login-details'>
        <img src={instapic}/>
        <div className='input-container'>
          <input type='text' placeholder='Phone number, username or email'
          name='username'
          onChange={handleChange}
          ></input>
          <br/>
          <input type='text' placeholder='Password'
          name='password'
          onChange={handleChange}
          ></input>
          <button className='login' onClick={signin}>Log in</button>
          <div className='breaker'>
          <hr className='smallhr'></hr><span style={{verticalAlign:"top", opacity:"0.5", fontWeight:"bold"}}>OR</span><hr className='smallhr'></hr>
          </div>
          <p className='tplogin'>Log in with Facebook</p>
          <p className='smallfont'>Forgot Password?</p>
        </div>
        
      </div>
      <div className='action-signup'>
        <p>Dont have an account? <span style={{color:"dodgerblue", fontWeight:"bold"}}>signup</span></p>
      </div>
      <div className='action-app'>
        <p>Get the App.</p>
        <div className='app-banner'>
          <img src={playstore}/>
        </div>
      </div>
      

      </div>
      </div>

    </div>
  )
}
