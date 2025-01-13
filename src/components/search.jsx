import React from 'react';
import '../styles/search.scss';

const searchLoginHead = () =>{
    return(
        <div className='head-section flex-row'>
            <div className='search-row'>
                <img className='search-icon' src="/images/search.png" alt="search-icon" />
                <input className="searchbox" type="search" placeholder="search packages..."/>
            </div>

            <div className='login-content flex-row'>
                <img className="phone-icon" src='/images/phone.png' alt="phone-image" />
                <input className='book-consultant' type="phone" value="Book Free Consultation"/>
                <div className='btn-login flex-row'>
                    <img src='/images/user.png' alt="user-image" />
                    <span>ZY</span>
                    <img src='/images/Login.png' alt="login-image" />
                    </div>
            </div>
        </div>
    )
}
export default searchLoginHead;