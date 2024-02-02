import './blog.css'



export default function Blog(){
    return(
        <div className="blog_section">
            <div className="container">
                <p className="blog_title">From Blog & News</p>
                <p className="blog_description">Welcome to Community Conversations, a new interview series featuring <br/> Intrepid travellers, creatives and activists in our community.</p>
                <div className="row forGAP">
                    <div className="col-6">
                        <div className="blog_card">
                            <img src="canada.png" alt="Canada"/>
                            <div className="blog_card_body">
                                <p className="blog_card_title">Banff National Park</p>
                                <p className="blog_card_text">Banff National Park lies in the heart of the majestic Rocky <br/> Mountains in the province of Alberta, and showcases <br/> some of Canada's most beautiful scenery. <br/> Turquoise-colored lakes, snow-capped peaks, and glaciers <br/> are all easily accessible </p>
                                <p className="blog_card_link">@thomasalva_adison</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="col-12">
                            <div className="forImage">
                                <img src="hiroshima.png" alt="Hiroshima" />
                            </div>
                            <div className="forTexts">
                                <p className="card_title_1">The Hiroshima Peace!</p>
                                <p className="blog_card_text">It was formally opened to the public in August that year.</p>
                                <p className="card_link_">@shova_bd88</p>
                            </div>
                        </div>
                        <div className="col-12 my-3">
                            <div className="forImage">
                                <img src="india.png" alt="India" />
                            </div>
                            <div className="forTexts">
                                <p className="card_title_2">The faithful prayers!</p>
                                <p className="blog_card_text2">A major pilgrimage center for Hindus, the holy city.</p>
                                <p className="card_link_">@adem/smith</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="forImage">
                                <img src="Naltar.png" alt="Naltar" />
                            </div>
                            <div className="forTexts">
                                <p className="card_title_3">Colourful waters!</p>
                                <p className="blog_card_text">Forest-driven water and energy cycles are poorly.</p>
                                <p className="card_link_">@jhon7leew</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}