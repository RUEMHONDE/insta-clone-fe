import React from 'react'
import "./sidenav.css";
import menulogo from "../../src/menulogoo.jpg";
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import {NavLink} from "react-router-dom";
export default function Sidenav() {
  return (
    <div className='side-nav'>
      <img src={menulogo} className='menulogo'/>
        <div className='display-picture'></div>
        <div className='name-container'>Rungano Mhonde</div>
        <div className='title'>Web Developer</div>
        <div className='info'>
          <div className='posts mini'>
            <p>46</p>
            <p>Posts</p>
          </div>
          <div className='followers mini'>
          <p>2.8k</p>
            <p>Followers</p>
          </div>
          <div className='following mini'>
          <p>526</p>
            <p>following</p>
          </div>
        </div>
        <div className='social-links'>
            <ul className='social-ul'>
              <NavLink className="navlink" to="/feed"  style={({ isActive, isPending })=>{
                return {
                  
                  color: isActive ? "palevioletred" : "black",
                }
              }}>
                {" "}
              <li>
                  <AppsOutlinedIcon /><span className='menu-item'>Feed</span>
                </li>
              </NavLink>
              <NavLink className="navlink" to="/explore"  style={({ isActive, isPending })=>{
                return {
                  
                  color: isActive ? "palevioletred" : "black",
                }
              }}>
                <li>
                <AppsOutlinedIcon /><span className='menu-item'>Explore</span>
                </li>
                </NavLink>
                <NavLink className="navlink" to="/explore"  style={({ isActive, isPending })=>{
                return {
                  
                  color: isActive ? "palevioletred" : "black",
                }
              }}></NavLink>
              <NavLink className="navlink" to="/feed"  style={({ isActive, isPending })=>{
                return {
                  
                  color: isActive ? "palevioletred" : "black",
                }
              }}>
                <li>
                <AppsOutlinedIcon /><span className='menu-item'>Notifications</span>
                </li>
                </NavLink>
                <NavLink className="navlink" to="/notifications"  style={({ isActive, isPending })=>{
                return {
                  
                  color: isActive ? "palevioletred" : "black",
                }
              }}>
                <li>
                <AppsOutlinedIcon /><span className='menu-item'>Messages</span>
                </li>
                </NavLink>
                <NavLink className="navlink" to="/messages"  style={({ isActive, isPending })=>{
                return {
                  
                  color: isActive ? "palevioletred" : "black",
                }
              }}>
                <li>
                <AppsOutlinedIcon /><span className='menu-item'>Direct</span>
                </li>
                </NavLink>
                <NavLink className="navlink" to="/direct"  style={({ isActive, isPending })=>{
                return {
                  
                  color: isActive ? "palevioletred" : "black",
                }
              }}>
                <li>
                <AppsOutlinedIcon /><span className='menu-item'>Stats</span>
                </li>
                </NavLink>
            </ul>
        </div>
    </div>
  )
}
