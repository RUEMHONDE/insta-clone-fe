import React, {useState} from 'react';
import car from "../../../../src/car.jpg";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import link from "../../../../src/link.webp";
import over from "../../../../src/over.webp";
import "./explore.css";
import ReactPlayer from 'react-player';

export default function Explore() {
    const [posttype, setPostType] = useState("post");
  return (
    <div>
        <h2>Explore</h2>
        <div className='feeds'>
      <div className='explore-content'>
        <div className='explore-item'>
            {posttype=="video" && (<>
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
        width="match-parent"
        playing={false}
        />
        </>)}
        {posttype=="post" && (<>
        <img src={car}/>
        
        </>)}

          <div className='feed-action'>
            <div>
          <div className='display-picture feed'></div><span className='feed-account-name'>Rungano</span>
          </div>
          
            <div className='feed-account-details'>
              <div className='explore-item-likes'><FavoriteBorderOutlinedIcon style={{verticalAlign: "middle"}}/>100k</div>&nbsp;&nbsp;
              <div className='explore-item-comments'><MapsUgcOutlinedIcon style={{verticalAlign: "middle"}}/>199</div>
            
          </div>
          </div>
        </div>
        <div className='explore-item'>
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
        width="match-parent"
        playing={false}
        />
          <div className='feed-action'>
            <div>
          <div className='display-picture feed'></div><span className='feed-account-name'>Rungano</span>
          </div>
          
            <div className='feed-account-details'>
              <div className='explore-likes'><FavoriteBorderOutlinedIcon style={{verticalAlign: "middle"}}/>100k</div>&nbsp;&nbsp;
              <div className='explore-item-comments'><MapsUgcOutlinedIcon style={{verticalAlign: "middle"}}/>199</div>
            
          </div>
          </div>
        </div>
        <div className='explore-item'>
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
        width="match-parent"
        playing={false}
        />
          <div className='feed-action'>
            <div>
          <div className='display-picture feed'></div><span className='feed-account-name'>Rungano</span>
          </div>
          
            <div className='feed-account-details'>
              <div className='explore-item-likes'><FavoriteBorderOutlinedIcon style={{verticalAlign: "middle"}}/>100k</div>&nbsp;&nbsp;
              <div className='explore-item-comments'><MapsUgcOutlinedIcon style={{verticalAlign: "middle"}}/>199</div>
            
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
