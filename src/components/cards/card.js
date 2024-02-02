import './card.css'



const offers = [
    {
        imageUrl:'newyork.png',
        title:'Statue of Liberty',
        location:'New York',
        rate:4.8,
        day:5,
        night:4,
        price:450
    },
    {
        imageUrl:'greatwall.png',
        title:'The Great Wall',
        location:'China ',
        rate:4.9,
        day:7,
        night:8,
        price:850
    },
    {
        imageUrl:'sajek.png',
        title:'Dizin',
        location:'Iran',
        rate:4.6,
        day:5,
        night:6,
        price:550
    },
    {
        imageUrl:'sajekvalley.png',
        title:'Sajek Valley',
        location:'Bangladesh',
        rate:4.7,
        day:3,
        night:4,
        price:400
    },
    {
        imageUrl:'osaka.png',
        title:'Osaka Castle',
        location:'Japan',
        rate:4.7,
        day:4,
        night:5,
        price:700
    }
]

export default function Card() {
    return(
        offers.map(offer =>{
            return(
                <div className="offers_card">
                    <img src={offer.imageUrl} alt={offer.location}/>
                    <div className="offers_card_body">
                        <p className="offers_card_title">{offer.title}</p>
                        <div className="d-flex">
                            <p className="forLocation">
                                <img src="location.png" alt="location"/>
                                <span className='mx-1'>{offer.location}</span>
                            </p>
                            <p className="forRate">
                                <img src="star.png" alt="rate"/>
                                <span className='mx-1'>{offer.rate}</span>
                            </p>
                        </div>
                        <p className="offers_card_text">{offer.day} Day {offer.night} Nights</p>
                        <p className="offers_card_price">${offer.price}/<span className='forPerson'>person</span></p>
                    </div>
                </div>
            )
        })
    )
}