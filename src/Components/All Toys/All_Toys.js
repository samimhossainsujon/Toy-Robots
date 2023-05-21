import React, { useEffect, useState } from 'react';
import All_Toys_Cart from './All_Toys_Cart';
import useTitleSetup from '../TitleSetup/TitleSetup';

const All_Toys = () => {
    useTitleSetup('All Toys')
    const [allToys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://assignment-11-server-blue.vercel.app/allToy?limit=20')
            .then(response => response.json())
            .then(data => {
                setAllToys(data);
            });
    }, []);

    const handleSearch = () => {
        fetch(`http://localhost:5000/allToySearch/${searchText}`)
            .then(response => response.json())
            .then(data => {
                setAllToys(data);
                setLoading(false)
                // console.log(data);
            });
    };

    return (
        <div>
            <div className="flex justify-center gap-6">
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search"
                    className="input input-bordered" />

                <button className="btn btn-outline btn-secondary" onClick={handleSearch}>Search</button>

            </div>


            <div className='w-11/12 md:10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-3 gap-5 mt-10 py-3 px-3'>
                {allToys.map((allToy) => (
                    <All_Toys_Cart key={allToy._id} allToy={allToy} />
                ))}
            </div>
        </div>
    );
};

export default All_Toys;
