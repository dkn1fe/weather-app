import React from 'react';
import './StartingLoading.scss';

const StartingLoading = ({ isStartLoading }) => {
  return (
    <div className={`overlay ${isStartLoading ? '' : 'overlay-hidden'}`}>
      <div className="loader-container">
        <span className="loader"></span>
        <h1 className="title">
          Weather <span className="accent">App</span>
        </h1>
      </div>
    </div>
  );
};

export default StartingLoading;
