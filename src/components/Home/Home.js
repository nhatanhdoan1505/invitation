import React, { useEffect } from 'react';
import './Home.css';
import Notify from './Notify/Notify';
import GetMarried from './GetMarried/GetMarried';
import CountDown from './CountDown/CountDown';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
        Aos.refresh();
    }, []); 

    return (
        <div className="Home" data-aos="fade-right">
             <Notify/>
             <GetMarried text="LỄ THÀNH HÔN." guess="Ban"/>
             <CountDown />
        </div>
    )
}

export default Home;