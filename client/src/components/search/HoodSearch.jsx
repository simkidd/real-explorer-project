import React from 'react'

const HoodSearch = () => {
    return (
        <div className="hood__search">
            <h3>Check out a neighborhood</h3>
            <form>
                <div className="search__container">
                    <input type="search" placeholder='Enter address, zip, city' />
                    <button>Search</button>
                </div>
            </form>
        </div>
    )
}

export default HoodSearch
