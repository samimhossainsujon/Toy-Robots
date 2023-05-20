import React from 'react';

const GalleryImg = ({ ToyDetail }) => {
    const { photoUrl} = ToyDetail;
    return (
        <div>
            <img src={photoUrl} alt="" />
        </div>

    );
};

export default GalleryImg;