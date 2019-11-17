import React, { Fragment } from 'react';

import gallery from './PhotoGallery.svg';

import Button from '../button/Button';

const Home = (props) => {
    return (
        <Fragment>
            <img src={gallery} alt="gallery" />
            <Button btnClassName="greenBtn" onBtnClick={props.onEnter} btnTitle="Open camera" />
            <Button btnClassName="grayBtn" onBtnClick={props.onEnter} btnTitle="Clear history" />
        </ Fragment>
    );
}

export default Home;