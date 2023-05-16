import React from 'react';
import {Outlet} from 'react-router-dom';
import "./landing.css";
import Sidenav from '../../../Sidenav/Sidenav';
import Header from '../../Header/Header';
import Stories from '../../Stories/Stories';
export default function Landing() {
  return (
    <div>
        <div className='landing-container'>
            <div className='sidenav'>
                <Sidenav/>
            </div>
            <div className='content-container'>
                <Header/>
                <Stories/>
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </div>

    </div>
  )
}
