import React from 'react';
import { Link } from 'react-router-dom';
import './_pagination.scss';
import { ArrowForwardIos } from '@material-ui/icons';


const Pagination = () => {
    return (
        <div className='pagination'>
            <div className='page'><Link to='#' className='active'>1</Link></div>
            <div className='page'><Link to='#'>2</Link></div>
            <div className='page'><Link to='#'>3</Link></div>
            <div className='page'><Link to='#'><ArrowForwardIos /></Link></div>
        </div>
    )
}

export default Pagination
