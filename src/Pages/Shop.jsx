import React from 'react';
import Herro from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollection from '../Components/NewCollection/NewCollection';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Shop = () => {
    return (
        <div>
            <Herro/>
            <Popular/>
            <Offers/>
            <NewCollection/>
            <NewsLetter/>
        </div>
    );
}

export default Shop;
