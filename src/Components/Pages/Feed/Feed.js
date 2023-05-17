import React from 'react'
import "./feed.css";
import car from "../../../../src/car.jpg";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import link from "../../../../src/link.webp";
import over from "../../../../src/over.webp";
export default function Feed() {
  return (
    <div>
      <h2>Feed</h2>
      <div className='feeds'>
      <div className='feed-content'>
        <div className='feed-item'>
          <img src={car} />
          <div className='feed-action'>
            <div>
          <div className='display-picture feed'></div><span className='feed-account-name'>Rungano</span>
          </div>
          
            <div className='feed-account-details'>
              <div className='feed-item-likes'><FavoriteBorderOutlinedIcon style={{verticalAlign: "middle"}}/>100k</div>&nbsp;&nbsp;
              <div className='feed-item-comments'><MapsUgcOutlinedIcon style={{verticalAlign: "middle"}}/>199</div>
            
          </div>
          </div>
        </div>
        <div className='feed-item'>
          <img src={over} />
          <div className='feed-action'>
            <div>
          <div className='display-picture feed'></div><span className='feed-account-name'>Rungano</span>
          </div>
          
            <div className='feed-account-details'>
              <div className='feed-item-likes'><FavoriteBorderOutlinedIcon style={{verticalAlign: "middle"}}/>100k</div>&nbsp;&nbsp;
              <div className='feed-item-comments'><MapsUgcOutlinedIcon style={{verticalAlign: "middle"}}/>199</div>
            
          </div>
          </div>
        </div>
        <div className='feed-item'>
          <img src={link} />
          <div className='feed-action'>
            <div>
          <div className='display-picture feed'></div><span className='feed-account-name'>Rungano</span>
          </div>
          
            <div className='feed-account-details'>
              <div className='feed-item-likes'><FavoriteBorderOutlinedIcon style={{verticalAlign: "middle"}}/>100k</div>&nbsp;&nbsp;
              <div className='feed-item-comments'><MapsUgcOutlinedIcon style={{verticalAlign: "middle"}}/>199</div>
            
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
