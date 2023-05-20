import React from 'react';

const ToyTabCard = ({ReactTab}) => {

    const { photoUrl} = ReactTab;
    console.log(photoUrl);
    return (
        <div>
            <img src={photoUrl} alt="" />
        </div>
    );
};

export default ToyTabCard;