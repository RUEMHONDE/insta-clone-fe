import React from 'react'
import "./stories.css";
import {useNavigate} from 'react-router-dom';
export default function Stories() {
  const navigate = useNavigate();
  const openStory = (storyid) =>{
    navigate("/story", {state:{storyid} });
  };
  const storyarr = [
    {
    "user":"Friend1",
    "dp": "link1",
    "storyid": "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    "user":"Friend2",
    "dp": "link2",
    "storyid": "https://images.pexels.com/photos/15242361/pexels-photo-15242361.png?auto=compress&cs=tinysrgb&w=600",
  },
  {
    "user":"Friend3",
    "dp": "link3",
    "storyid": "122",
  },
  {
    "user":"Friend4",
    "dp": "link4",
    "storyid": "123",
  },
  {
    "user":"Friend5",
    "dp": "link5",
    "storyid": "124",
  },
]
  return (
    <div>
      <div className='heading'>
        <div><h2>Stories</h2></div>
        <div style={{marginRight:"50px", marginTop:"10px"}}><p>Watch All</p></div>
      </div>
      <div className='stories'>
        {storyarr.map((elem) =>{
          return (<>
          <div className='display-picture story' onClick={()=>{
            openStory(elem.storyid);
          }}
            ></div>
          </>)
        })}
      
      {/* <div className='display-picture story'></div>
      <div className='display-picture story'></div>
      <div className='display-picture story'></div>
      <div className='display-picture story'></div>
      <div className='display-picture story'></div>
      <div className='display-picture story'></div>
      <div className='display-picture story'></div>
      <div className='display-picture story'></div>
      <div className='display-picture story'></div> */}
        </div>   
    </div>
  )
}
