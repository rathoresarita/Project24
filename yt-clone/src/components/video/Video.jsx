import React from 'react'
 import './_video.scss'
 import { AiFillEye } from 'react-icons/ai'
 

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">

        <img src='https://i.ytimg.com/vi/t3im_RCpD50/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDKPXJj5n_lgvPS49D8kI-HvXBriw"'/>05:43
        <span></span>
      </div>
      <div className="video__title">
Create app in 5 minutes  #made by chintu 

      </div>
      <div className="video__details">
<span>

  <AiFillEye></AiFillEye> 5m Views.
</span>
<span> 5 days ago</span>

      </div>
      <div className="video__channel">

        <img src=     "https://yt3.ggpht.com/C2LsE5yGdsAyVyR3I3RPnIcrRQqLKrn5jygoQOWkyWH2Aol4nKlsh3HamGe9EYQK_TLfDzM0KQ=s68-c-k-c0x00ffffff-no-rj" alt=''/>

        <p>Rainbow Hat Jr</p>

      </div>
    </div>
    
  )
}

export default Video