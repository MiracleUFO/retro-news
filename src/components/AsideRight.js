import React from 'react';
import monroe  from '../assets/imgs/monroe.jpg';
import obama  from '../assets/imgs/obama.jpg';
import '../assets/css/feed.css';

const AsideRight = () => {
  return (
    <aside id='aside-right'>
      <div className='flex-column'>
        <img src={monroe} alt='Marilyn Monroe' />
        <div className='flex-column'>
          <h1>Marilyn Monroe blending into Broadway</h1>
          <p>The President after victory on Saturday is set to take the stage for swearing in next Thursday on the idyllic White House...</p>
        </div>
      </div>

      <div className='flex-column'>
        <div>
          <img src={obama} className='thumb-img' alt='Barack Obama black and white' />
          <h1 className='thumb-text'>President Obama set to take the stage for swearing in on Thursday</h1>
        </div>
        <p>The President after victory on Saturday is set to take the stage for swearing in next Thursday in the idyllic White House...</p>
      </div>
    </aside>
  )
}

export default AsideRight;