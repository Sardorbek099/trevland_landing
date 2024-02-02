import './footer.css'

export default function Footer(){
    return(
        <div className='footer_section'>
            <div className='container'>
                <div className='row'>
                    <div className='forLogo'>
                        <p className='logoName'>Trevland</p>
                        <p className='contact'>Contact us <br/>
                        <span>@shovasatkhira88.com</span>
                        </p>
                        <div className='d-flex'>
                            <img src='facebook.png' alt='facebook'/>
                            <img src='instagram.png' alt='instagram'/>
                            <img src='twitter.png' alt='twitter'/>
                            <img src='google.png' alt='google'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}