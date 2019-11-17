import React from 'react';

import gallery from './PhotoGallery.svg';

import Button from '../button/Button';

const Home = ({ onEnter, onClearHistory, btnClassName}) => {

    const clearClass = btnClassName

    return (
        <div className="home">
            <img className="photoGallery" src={gallery} alt="gallery" />
            <Button btnClassName="greenBtn" onBtnClick={onEnter} btnTitle="Open camera" />
            <Button btnClassName={clearClass} onBtnClick={onClearHistory} btnTitle="Clear history" />
        </ div>
    );
}

export default Home;