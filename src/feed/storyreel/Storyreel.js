import React from 'react';
import "./Storyreel.css";
import Story from './story/Story';

function Storyreel() {
  return (
    <div className="storyReel">
     <Story 
      image="https://www.syfy.com/sites/syfy/files/syfywire_blog_post/2018/10/avengers-tony-stark-iron-man-movie-hd-wallpaper-2880x1800-1920x1080.jpg"
      profileSrc="https://vignette.wikia.nocookie.net/marvelcentral/images/9/97/Tony-Stark.jpg/revision/latest/scale-to-width-down/340?cb=20130429010603"
      
      title="Tony Stark"
      />
        <Story 
      image="https://m.media-amazon.com/images/M/MV5BMzFiODE0ZDUtN2IxNC00OTI5LTg4OWItZTE2MjU4ZTk2NjM5XkEyXkFqcGdeQXVyNDYzODU1ODM@._V1_.jpg"
      profileSrc="https://img1.looper.com/img/gallery/black-widow-solo-movie-begins-filming/intro-1559231644.jpg"
      title="Black Widow"
      /> 
      <Story 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEmR2IE7Rqe_8myWPNViAmfloE-tp1JDgaPA&usqp=CAU"
      profileSrc="https://m.hindustantimes.com/rf/image_size_1200x900/HT/p2/2020/05/22/Pictures/_3893ca1e-9bff-11ea-9ae4-6c4a5d56c128.jpeg"
      title="Doctor Strange"
      /> 
      <Story 
      image="https://www.syfy.com/sites/syfy/files/styles/1200x680_hero/public/wire/legacy/CaptainAmericaChrisEvans.jpg"
      profileSrc="https://i.pinimg.com/originals/c3/d2/bb/c3d2bbae95b2bcd8e9a0145ed1d6da3a.jpg"
      title="Steve Rogers"
      /> 
      <Story 
      image="https://i.pinimg.com/originals/49/98/00/499800645d67344807f4392d1b5d092f.jpg"
      profileSrc="https://cdn1.i-scmp.com/sites/default/files/styles/768x768/public/images/methode/2018/04/11/a1a2d104-3d3c-11e8-b6d9-57447a4b43e5_1280x720_154233.JPG?itok=cSZPKjBm"
      title="Captain Marvel"
      />  
    </div>
  )
}

export default Storyreel;
