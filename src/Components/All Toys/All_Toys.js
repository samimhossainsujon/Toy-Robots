import React, { useContext, useEffect, useState } from 'react';
import All_Toys_Cart from './All_Toys_Cart';
// import { AuthContext } from '../AuthProvider/AuthProvider';

const All_Toys = () => {
    // const {User}= useContext(AuthContext)
    const [allToys, setAllToy] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allToy')
            .then(response => response.json())
            .then(data => {
                setAllToy(data);
            })


    },)

    return (
        <div>       
        {allToys.map((allToy)=><All_Toys_Cart
        key={allToy._id}
        allToy={allToy}
        >
        </All_Toys_Cart>) }

        </div>
    );
};

export default All_Toys;