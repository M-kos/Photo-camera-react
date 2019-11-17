import React from 'react';

const History = ({ imgArr }) => {
    const imgList = imgArr.map(({ id, imgSrc }) => {
        return <img className="photo-item" key={id} src={imgSrc} alt={"photo"+id}/>
    });
    return (
        <div className="history">
            {imgList}
        </div>
    );
}

export default History;