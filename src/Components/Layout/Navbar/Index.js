import React from 'react';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return(
    <>
    <div className='navbar'>
        <div className='navbar-left' style={{marginTop : '50px'}}>
            <b>Leverage-FC</b>
        </div>


        <div className='navbar-right' style={{marginTop : '50px'}}>
            <div className='search'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='small gray'/>
                <input type='text' placeholder='Search ...' />
            </div>
            <button className='navbar-profile-button'>

                <FontAwesomeIcon icon={faBell} />
                
                </button>
            <div className='navbar-profile-image'>
                <img src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            </div>
        </div>
    </div>
    </>
    )
}

export default Navbar;