import React from 'react'
import { Link } from 'react-router-dom';
import './_navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <ul>
                    <li>
                        <Link to='/' className='nav-link' >Buy</Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-link' >Rent</Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-link' >Sell</Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-link' >Home Loans</Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-link' >Save to Rent/Buy</Link>
                    </li>
                </ul>
                <div className='nav-brand'>
                    <Link to='/'>
                        <img src="/ui-ux/assets/logo.svg" alt="" />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to='/' className='nav-link' >Advertise</Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-link' >Help</Link>
                    </li>
                    <li>
                        <Link to='/' className='sign-up'>Sign Up</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
