import React from 'react'

const Hero = () => {
    return (
        <div className="inner">
                <div className="banner__left">
                    <div className="text">
                        <h1>Find out a place</h1>
                        <h1 className='bold'>you'll love to live</h1>
                        <p>With the most complete source of homes <br />
                            for sale & real estate near you</p>
                    </div>

                    <form>
                        <div className="search__container">
                            <input type="search" placeholder='Enter address, zip, city' />
                            <button>Search</button>
                        </div>
                    </form>
                </div>
                

            </div>
    )
}

export default Hero
