import React from 'react';
import './_search.scss';
import NavbarSearch from '../../components/navbar/NavbarSearch';
import { KeyboardArrowDown, NotificationsNoneOutlined, Close } from '@material-ui/icons'
import Footer from '../../components/footer/Footer';

const Search = () => {
    return (
        <div className='search__page'>
            <NavbarSearch />
            <div className="container">
                <div className="search__header">
                    <h3>18 appear from 297 Results</h3>
                    <h1>Search Result <span>'Atlanta, GA'</span></h1>
                    <div className="header__options">
                        <div className="option__left">
                            <div className="radio">
                                <div className="radio__wrap">
                                    <input type="radio" name="type" id="buy" defaultChecked />
                                    <label htmlFor="buy">Buy</label>
                                    <input type="radio" name="type" id="rent" />
                                    <label htmlFor="rent">Rent</label>
                                    <input type="radio" name="type" id="sell" />
                                    <label htmlFor="sell">Sell</label>
                                </div>
                            </div>
                            <div className='filter selected'>
                                <select >
                                    <option selected >House</option>
                                </select>
                                <Close className='close' />
                            </div>
                            <div className='filter'>
                                <select >
                                    <option selected >Rooms</option>
                                </select>
                                <KeyboardArrowDown />
                            </div>
                            <div className='filter'>
                                <select >
                                    <option selected >Price</option>
                                </select>
                                <KeyboardArrowDown />
                            </div>
                            <div className='filter'>
                                <select >
                                    <option selected >keywords</option>
                                </select>
                                <KeyboardArrowDown />
                            </div>
                            <div className='filter'>
                                <select >
                                    <option selected >More</option>
                                </select>
                                <KeyboardArrowDown />
                            </div>
                            <button type='button'>
                                <NotificationsNoneOutlined />
                                Save Search
                            </button>
                        </div>
                        <div className="option__right">
                            <div className='search__map'>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Show Maps</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search__body">
                    <div className="body__left">
                        <div className="search__card">
                            <div className="card__img">
                                <img src="/ui-ux/assets/search/Img.png" alt="" />
                            </div>
                            <div className="card__body">
                                <h2 className='card__price'>$24,000,000</h2>
                                <p className="card__address">
                                    1998 Wufma Point <br />
                                    Minnessota, Atlanta, GA
                                </p>
                            </div>
                        </div>
                        <div className="search__card">
                            <div className="card__img">
                                <img src="/ui-ux/assets/search/Img(1).png" alt="" />
                            </div>
                            <div className="card__body">
                                <h2 className='card__price'>$989,000</h2>
                                <p className="card__address">
                                    1998 Wufma Point <br />
                                    Minnessota, Atlanta, GA
                                </p>
                            </div>
                        </div>
                        <div className="search__card">
                            <div className="card__img">
                                <img src="/ui-ux/assets/search/Img(2).png" alt="" />
                            </div>
                            <div className="card__body">
                                <h2 className='card__price'>$896,000</h2>
                                <p className="card__address">
                                    1998 Wufma Point <br />
                                    Minnessota, Atlanta, GA
                                </p>
                            </div>
                        </div>
                        <div className="search__card">
                            <div className="card__img">
                                <img src="/ui-ux/assets/search/Img.png" alt="" />
                            </div>
                            <div className="card__body">
                                <h2 className='card__price'>$1,095,000</h2>
                                <p className="card__address">
                                    1998 Wufma Point <br />
                                    Minnessota, Atlanta, GA
                                </p>
                            </div>
                        </div>
                        <div className="search__card">
                            <div className="card__img">
                                <img src="/ui-ux/assets/search/Img(1).png" alt="" />
                            </div>
                            <div className="card__body">
                                <h2 className='card__price'>$1,495,000</h2>
                                <p className="card__address">
                                    1998 Wufma Point <br />
                                    Minnessota, Atlanta, GA
                                </p>
                            </div>
                        </div>
                        <div className="search__card">
                            <div className="card__img">
                                <img src="/ui-ux/assets/search/Img(2).png" alt="" />
                            </div>
                            <div className="card__body">
                                <h2 className='card__price'>$24,000,000</h2>
                                <p className="card__address">
                                    1998 Wufma Point <br />
                                    Minnessota, Atlanta, GA
                                </p>
                            </div>
                        </div>
                        <div className="search__card">
                            <div className="card__img">
                                <img src="/ui-ux/assets/search/Img.png" alt="" />
                            </div>
                            <div className="card__body">
                                <h2 className='card__price'>$24,000,000</h2>
                                <p className="card__address">
                                    1998 Wufma Point <br />
                                    Minnessota, Atlanta, GA
                                </p>
                            </div>
                        </div>
                        <div className="search__card">
                            <div className="card__img">
                                <img src="/ui-ux/assets/search/Img(1).png" alt="" />
                            </div>
                            <div className="card__body">
                                <h2 className='card__price'>$24,000,000</h2>
                                <p className="card__address">
                                    1998 Wufma Point <br />
                                    Minnessota, Atlanta, GA
                                </p>
                            </div>
                        </div>
                        <div className="search__card">
                            <div className="card__img">
                                <img src="/ui-ux/assets/search/Img(2).png" alt="" />
                            </div>
                            <div className="card__body">
                                <h2 className='card__price'>$24,000,000</h2>
                                <p className="card__address">
                                    1998 Wufma Point <br />
                                    Minnessota, Atlanta, GA
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="body__right">
                        <div className="search__map">
                            <img src="/ui-ux/assets/search/map.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Search
