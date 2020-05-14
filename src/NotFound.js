import React from 'react';
import sad from './images/sad-smiley.png';

const NotFound = () => {
  return (
    <div className="danger">
        <p>The page you requested has not been found </p>
        <img src={sad} className="App-sad" alt="sad smiley" />
    </div>
  );
}

export default NotFound;
