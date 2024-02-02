import React from 'react'
import Cards from '../../components/cards/card'
import './offers.css'



export default function Offers() {
    return(
        <div className="offers_section">
            <div className='container'>
            <p className="offers_title">Special Offers</p>
            <p className="offers_description">With the New Year comes a refreshing sense of wanderlust, a longing in our souls <br/> to escape to warmer climates, </p>
            </div>
            <div className="row mx-3">
                <Cards/>
            </div>
        </div>
    )
}