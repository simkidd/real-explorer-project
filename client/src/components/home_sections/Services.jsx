import React from 'react';
import Title from '../title/Title';

const Services = () => {
    return (
        <div className='service__section'>
            <div className="container">
                <Title title='OUR SERVICES' />
                <p>We have the most listings and constant <br /> updates. So you'll never miss out.</p>
                <div className="card__wrapper">
                    <div className='service__card'>
                        <div className="card__inner">
                            <div className="icon__wrapper">
                                <div className="icon" style={{background: '#ffdec7'}} >
                                    <img src='/ui-ux/assets/homepage/house-icon.svg' alt="" />
                                </div>
                            </div>
                            <h3 className="title">
                                Buy a home
                            </h3>
                            <p className="text">
                                Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.
                            </p>
                        </div>
                    </div>

                    <div className='service__card'>
                        <div className="card__inner">
                            <div className="icon__wrapper">
                                <div className="icon" style={{background:'#e3dcfe'}} >
                                    <img src='/ui-ux/assets/homepage/money-icon.svg' alt="" />
                                </div>
                            </div>
                            <h3 className="title">
                                Sell a home
                            </h3>
                            <p className="text">
                                Whether you sell with new Oval offers or take another approach, we'll help you navigate the path to a succesful sale.
                            </p>
                        </div>
                    </div>

                    <div className='service__card'>
                        <div className="card__inner">
                            <div className="icon__wrapper">
                                <div className="icon" style={{background:'#f9d9ea'}} >
                                    <img src='/ui-ux/assets/homepage/rent-icon.svg' alt="" />
                                </div>
                            </div>
                            <h3 className="title">
                                Rent a home
                            </h3>
                            <p className="text">
                                We're creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services
