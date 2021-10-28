import React from 'react';
import Title from '../title/Title';
import ServiceCard from '../service_card/ServiceCard';
import card from '../../data/ServiceCard';

const Services = () => {
    return (
        <div className='service__section'>
            <div className="container">
                <Title title='OUR SERVICES' />
                <p>We have the most listings and constant <br /> updates. So you'll never miss out.</p>
                <div className="card__wrapper">
                    {
                        card.map((card, i) => {
                            return <ServiceCard key={i} icon={card.icon} title={card.title} text={card.text} />
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Services
