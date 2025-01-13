import React from 'react';
import '../styles/minCards.scss';

const data=[
    {
        'id':'0',
        'image':'/images/crown.png',
        'title':"Incorporation Package ",
        'description':"Effortless business setup with our all-inclusive incorporation services",
        'price':'770',
        'btn_default':'compare',
        'btn_primary':'buy now'
    },
    {
        'id':'1',
        'image':'/images/lamp.png',
        'title':"Personalized Package",
        'description':"Design your own package with services customized for your needs.",
        'btn_default': '/images/lock.svg'
    }
];

const smallCards = () =>{
    return(
        <>
        {data.map((d)=>(
            <div className="min-cards" key={d.id}>
                <div className="amount">
                    <img className='img' src={d.image} alt={d.badge_title}/>
                    {d.price && <div><span>$</span><span className='amt'>{d.price}</span><span>one time</span></div>}
                </div>
                <h3 className="h3">{d.title}</h3>
                <p className="txt">{d.description}</p>
                {(d.btn_default && d.btn_primary) ? <div className='flex-row action'>
                    <button className="btn btn-default">{d.btn_default}</button>
                    <button className="btn btn-primary">{d.btn_primary}</button>
                </div>:
                <div className='flex-row action'>
                <button className="btn btn-default"><img src={d.btn_default} alt="image"/></button>
            </div>}
            </div>
        ))}
        </>
    );
}
export default smallCards;