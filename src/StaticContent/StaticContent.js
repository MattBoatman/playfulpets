import React from 'react';
import Avatar from '../Avatar/Avatar';
import playfulSquare from '../playfulpetssquare.png';
import './StaticContent.css';

const StaticContent = () => {
  return (
    <div className="pageLeft">
      <div className="pageContent">
        <div className="avatarWrapper">
          <Avatar imageURL={playfulSquare} />
        </div>
      </div>
    </div>
  );
};

export default StaticContent;
