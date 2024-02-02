import './popular_location.css'


export default function PopularLocation(){
    return(
        <div className="locations_section">
        <div className="container">
            <p className="title">Popular Location</p>
            <p className="description">For every one of us, travel came first. We’ve spent years living as nomads, pioneers, and <br/> voyagers— from island hopping in the</p>
            <div className="row forGap">
                <div className="col-4">
                    <div className="card">
                        <img src="image 45.png" alt="nimadir"/>
                        <div className='card_body'>
                        <div className="card_title">
                        Istanbul, Turkey
                        </div>
                        <div className="card_description">
                        Istanbul is a major city in Turkey that straddles Europe. 
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="image 48.png" alt="nimadir"/>
                        <div className='card_body'>
                        <div className="card_title">
                        Kuala Lumpur, malaysia
                        </div>
                        <div className="card_description">
                        A 272-step long trek leads you to <br/> this century.
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="image 47.png" alt="nimadir"/>
                        <div className='card_body'>
                        <div className="card_title">
                        Seoul, South Korea
                        </div>
                        <div className="card_description">
                        South Korea officially the Republic of <br/> Korea is a country in East Asia.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

