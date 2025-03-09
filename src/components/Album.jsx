import React from 'react';
import { Link } from 'react-router-dom';
import "./Album.css";
import ImgCard from './ImgCard';
import Pattern from './Pattern';

const Album = () => {
  return (
    <div>
      <Pattern />
      <div className="album flex flex-wrap">
        <p className='font-bold text-2xl'>Moments</p>
        <div className="cards flex flex-wrap">
          <ImgCard image={"src\\assets\\moments\\butterflies.jpg"} title={"Butterflies 🦋"} />
          <ImgCard image={"src\\assets\\moments\\whoisshe.jpg"} title={"Who is She? 👀"} />
          <ImgCard image={"src\\assets\\moments\\kajal.jpg"} title={"Kajal..."} />
          <ImgCard image={"src\\assets\\moments\\smile.jpg"} title={"Her Smile!"} />
          <ImgCard image={"src\\assets\\moments\\kisses.jpg"} title={"Kisses~"} />
          <ImgCard image={"src\\assets\\moments\\sweetest.jpg"} title={"Sweetest ✨"} />
          <ImgCard image={"src\\assets\\moments\\cutupiee.jpg"} title={"Cutupiee 🎀"} />
        </div>
        <Link to="/code" className="next-page-button">Next Page</Link>
      </div>
    </div>
  );
}

export default Album;