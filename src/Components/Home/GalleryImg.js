import React from 'react';

const GalleryImg = ({ ToyDetail }) => {
    const { photoUrl } = ToyDetail;
    return (
        <div className="avatar">
            <div className="w-96 rounded-full">
                <img src={photoUrl} alt="" />
            </div>
        </div>



    );
};

export default GalleryImg;