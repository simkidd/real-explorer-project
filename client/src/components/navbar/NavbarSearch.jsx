import React from 'react';
import { Link } from 'react-router-dom';
import './_navbarSearch.scss';

const NavbarSearch = () => {
    return (
        <div className='navbar__search'>
            <div className="navbar__searchContainer">
                <div className="nav__brand">
                    <Link to='/'>
                        <img src="/ui-ux/assets/logo.svg" alt="" />
                    </Link>
                </div>
                <form>
                    <div className="search__wrap">
                        <input type="search" placeholder='Search location...' />
                        <button type='submit' className="search__icon">
                            <img src="/ui-ux/assets/search/Loupe.png" alt="" />
                        </button>
                    </div>
                </form>
                <ul className='nav__left'>
                    <li><Link to='/' className='nav-link'>Buy</Link></li>
                    <li><Link to='/' className='nav-link'>Rent</Link></li>
                    <li><Link to='/' className='nav-link'>Sell</Link></li>
                    <li><Link to='/' className='nav-link'>Home Loans</Link></li>
                    <li><Link to='/' className='nav-link'> Save to Rent/Buy</Link></li>
                </ul>
                <ul className='nav__right'>
                    <li><Link to='/' className='nav-link'>Advertise</Link></li>
                    <li><Link to='/' className='nav-link'>Help</Link></li>
                    <li><Link to='/' className='sign-up'>Sign Up</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarSearch
