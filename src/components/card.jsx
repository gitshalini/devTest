import React from 'react';
import '../styles/cards.scss';

const data=[
    {
        'id':'0',
        'class': 'active',
        'image':'/images/crown.png',
        'badge_title': "Popular",
        'badge_text': "All Inclusive Solution",
        'title':"Business Elite Package",
        'description':"Premium business support with company setup, end-to-end compliance, accounting, and payroll solutions",
        'price':'7,628'
    },
    {
        'id':'1',
        'image':'/images/lamp.png',
        'badge_text': "Great for Startup",
        'title':"Founders Starter Package",
        'description':"Kickstart your business with hassle-free company registration and streamlined compliance.",
        'price':'2,885'
    }
];

const Cards = () =>{
    return(
        <>
        {data.map((d)=>(
            <div className={`card-wrap ${d.class ? d.class: ''}`} key={d.id}>
                {d.badge_title && <span className="badge">{d.badge_title}</span>}
                <p className='badge-txt'>
                    <img className='img' src={d.image} alt={d.badge_title}/>
                    {d.badge_text}
                </p>
                <h3 className="h3">{d.title}</h3>
                <p className="txt">{d.description}</p>
                <div className='flex-row'>
                    <div className='action'>
                        <button className="btn btn-default">compare</button>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                    <div className="amount">
                        <span>$</span><span className='amt'>{d.price}</span><span>/year</span>
                    </div>
                </div>
            </div>
        ))}
        </>
    );
}
export default Cards;