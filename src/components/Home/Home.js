import React from 'react';
import MobileApp from '../MobileApp/MobileApp';
import Newsletter from '../Newsletter/Newsletter';
import Service from '../Service/Service';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <MobileApp></MobileApp>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;