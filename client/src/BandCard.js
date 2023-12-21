import React from 'react';
import { Link } from 'react-router-dom';

function BandCard({ band }) {

  return (
    <>
      <div className="venue-card">

        <img
          style={{ width: '150px', height: '150px' }}
          src={band.band_img_url}
          alt={band.band_name}
           />
        <h3>{band.band_name}</h3>
        <h4>{band.genre}</h4>
        <Link to={`/bands/${band.id}`}>Check Out Band</Link>
      </div>
      <br />
    </>
  );
}

export default BandCard;