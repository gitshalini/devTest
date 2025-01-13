import React from 'react';
import SearchLoginHead from "./search";
import Banner from './banner';
import Cards from './card';
import MinCards from './smallCards';
import { FaChevronLeft } from "react-icons/fa6";

const Dashboard = () =>{
    return(
        <div className='wrapper'>
            <SearchLoginHead/>
            <Banner />
            <div className='content-wrap'>
            <div className='left'>
            <Cards/>
            </div>
            <div className='right'>
            <MinCards/>
            </div>
            </div>
            <button className='back'><FaChevronLeft/></button>
        </div>
    )
}
export default Dashboard;