import React from 'react';
import './Style.css';
const UsernameCard = () => {
    return(
        <div className='username-card'>
            <div className='username-card-image'>

                <img src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>

            </div>
            <div className='username-card-info'>
                <h3 className='username'>Rania Elabed</h3>
                <span className='small'>@raniaelabed</span>
            </div>
        </div>
    )
}


export default UsernameCard;