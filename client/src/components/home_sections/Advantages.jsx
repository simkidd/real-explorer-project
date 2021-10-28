import React from 'react'
import Title from '../title/Title';

const Advantages = () => {
    return (
        <div className='advantages'>
            <div className="adv__container">
                <div className="adv__containerInner">
                <img src="/ui-ux/assets/homepage/Stacked Group.png" className='bg-lines' alt="" />
                    <Title title="ADVANTAGES" className='title' />
                    <p className='subtitle'>Why Real explorer is better</p>
                    <div className="card__inner">
                        <div className="card__innerWrap">
                            <div className="inner__left">
                                <h3>Traditional home sale</h3>
                                <ul>
                                    <li>Risk of buyer financing fall-through</li>
                                    <li>Hours of prep work and home showings</li>
                                    <li>Manage repairs yourself</li>
                                    <li>Uncertain closing timeline</li>
                                </ul>
                            </div>
                            <div className="inner__right">
                                <h3>Selling to <span>RealExplorer</span></h3>
                                <ul>
                                    <li>Competitive cash offer in 24 hours</li>
                                    <li>No listing, prep work, or showings</li>
                                    <li>Skip the repair work and deduct the costs</li>
                                    <li>Choose any close date from 10-60 days</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="adv__bottom">
                        <h1>485,091+</h1>
                        <h3>Home available</h3>
                        <p>Every 60 seconds a homeowner requests an offer from oval</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages
