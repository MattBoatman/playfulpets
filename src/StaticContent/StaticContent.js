import React from 'react';
import Avatar from '../Avatar/Avatar';
import playfulpetscolor from '../playfulpetscolor.jpg';
import './StaticContent.css';
import playfulSquare from '../playfulpetssquare.png';

const StaticContent = () => {
  return (
    <div className="pageLeft">
      <div className="pageContent">
        <div className="avatarWrapper">
          <Avatar imageURL={playfulSquare} />
          {/* <div className="about">
            <p>Your dogs will love it here!</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default StaticContent;
