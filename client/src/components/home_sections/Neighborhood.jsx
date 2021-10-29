import React from 'react'
import HoodSearch from '../search/HoodSearch'

const Neighborhood = () => {
    return (
        <div className='hood'>
            <div className="hood__container">
                <h2>Find Your Neighborhood</h2>
                <p>Does it have pet-friendly rentals? What are the crime rates? How are the schools? <br /> Get important local information on the area you've most interested in.</p>
                <div className="hoods">
                    <div className="hood__item1 g__single">
                        <div className="image__wrapper">
                            <img src="/ui-ux/assets/findneighborhood-gallery/rosedale.png" alt="" />
                            <div className="hood__caption">
                                <h3>Rosedale</h3>
                                <p>Lekki, Lagos</p>
                            </div>
                        </div>
                    </div>
                    <div className="hood__item2 g__double">
                        <div className="image__wrapper">
                            <img src="/ui-ux/assets/findneighborhood-gallery/highlands.png" alt="" />
                            <div className="hood__caption">
                                <h3>Highlands</h3>
                                <p>Opebi, Lagos</p>
                            </div>
                        </div>
                    </div>
                    <div className="hood__item3 g__double">
                        <div className="image__wrapper">
                            <img src="/ui-ux/assets/findneighborhood-gallery/downtown.png" alt="" />
                            <div className="hood__caption">
                                <h3>Downtown</h3>
                                <p>Akure, Ondo</p>
                            </div>
                        </div>
                    </div>
                    <div className="hood__item4 g__single">
                        <div className="image__wrapper">
                            <img src="/ui-ux/assets/findneighborhood-gallery/willow-green.png" alt="" />
                            <div className="hood__caption">
                                <h3>Willow Green</h3>
                                <p>Owerri, Imo</p>
                            </div>
                        </div>
                    </div>
                    <div className="hood__item5 g__double">
                        <div className="image__wrapper">
                            <img src="/ui-ux/assets/findneighborhood-gallery/north-aurora.png" alt="" />
                            <div className="hood__caption">
                                <h3>North Aurora</h3>
                                <p>G.R.A, Port Harcourt</p>
                            </div>
                        </div>

                    </div>
                    <div className="hood__item6 g__double">
                        <div className="image__wrapper">
                            <img src="/ui-ux/assets/findneighborhood-gallery/north-quincy.png" alt="" />
                            <div className="hood__caption">
                                <h3>North Quincy</h3>
                                <p>Omagwa, Rivers</p>
                            </div>
                        </div>
                    </div>
                </div>

                <HoodSearch />
            </div>
        </div>
    )
}

export default Neighborhood
