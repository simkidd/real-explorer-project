import React from 'react'
import Title from '../title/Title';
import { VerifiedUserOutlined, CreditCardOutlined, EventAvailableOutlined, ChevronRight } from '@material-ui/icons'

const HowItWorks = () => {
    return (
        <div className='how__works'>
            <div className="how__container">
                <Title title='HOW IT WORKS' className='title' />
                <p className='subtitle'>Peace of mind. At every step <br /> of your journey home.</p>
                <div className="step__wrapper">
                    <div className="step">
                        <div className="step__icon active">
                            <h3>1</h3>
                        </div>
                        <p>Discover House</p>
                    </div>
                    <div className="step">
                        <div className="step__icon">
                            <EventAvailableOutlined />
                        </div>
                        <p>Schedule to visit</p>
                    </div>
                    <div className="step">
                        <div className="step__icon">
                            <CreditCardOutlined />
                        </div>
                        <p>Hassle-free purchase</p>
                    </div>
                    <div className="step">
                        <div className="step__icon">
                            <VerifiedUserOutlined />
                        </div>
                        <p>Buyback guarantee</p>
                    </div>
                </div>
                <div className="step__card">
                    <div className="inner__card">
                        <div className="inner__cardWrap">
                            <h2>Find a home just<br /> right for you</h2>
                            <p className='desc'>Real explorer owns hundreds of homes for sale near you. See homes on the market, or get a sneak peek at those that have yet to hit the market.</p>
                            <div className="inner__wrapBottom">
                                <p><span>1/4</span> Discover House</p>
                                <button>Next<ChevronRight /></button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
