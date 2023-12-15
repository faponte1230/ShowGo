import React from 'react'
import { Link } from 'react-router-dom'

function UserFavBandsCard({band}) {
  return (
    <div className='user-events-container-inner'>
        <div className='indi-container'>
            <p>{band.favBand_name}</p>
            <Link to={`/bands/${band.fav_band_id}`}>Check Out Band</Link>
        </div>
    </div>
  )
}

export default UserFavBandsCard