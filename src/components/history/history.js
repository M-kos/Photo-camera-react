import React from 'react';
import './history.css';

const History = ({ imgArr }) => {
    const imgList = imgArr.map(({ id, imgSrc }) => {
        return <img className="photo-item" key={id} src={imgSrc} alt={"photo"+id}/>
    });
    return (
        <div className="history">
            <p className="historyTitle">History</p>
            <div className="img-container">
                {imgList}
            </div>
        </div>
    );
}

export default History;