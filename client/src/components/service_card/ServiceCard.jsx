import React from 'react'

const ServiceCard = ({ title, text, icon }) => {
    return (
        <div className='service__card'>
            <div className="card__inner">
                <div className="icon__wrapper">
                    <div className="icon">
                        <img src={icon} alt="" />
                    </div>
                </div>
                <h3 className="title">
                    {title}
                </h3>
                <p className="text">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default ServiceCard
