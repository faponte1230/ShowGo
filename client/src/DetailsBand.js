import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './Context/user';
import DetailsEvent from './DetailsEvent';

function DetailsBand() {
  const { id } = useParams()
  const [errors, setErrors]  = useState([])

  const { bands, setBands , user, setUser } = useContext(UserContext)
  const band = bands.find((b) => b.id === parseInt(id, 10))

  if (!band) {
    return <div>Band not found</div>;
  } else {

    const userFavBand = user.favorite_bands && user.favorite_bands.find((favBnd) => favBnd.fav_band_id === band.id);
    const isFav = userFavBand !== undefined;
    
    function updateBandsWithFavBand(favBandObject) {

    const updatedBands = bands.map((bnd) =>
      bnd.id === favBandObject.fav_band_id ? { ...bnd, favorite_bands: [...bnd.favorite_bands, favBandObject] } : bnd
    );
    setBands(updatedBands);
    }
      
  function handleFav(e) {
    e.preventDefault();
    fetch('/favorite_bands', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          band_id: band.id,
          user_id: user.id
      })
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((favBandData) => {
            updateBandsWithFavBand(favBandData)
            setUser({ ...user, favorite_bands: [...user.favorite_bands, favBandData] });
            alert(`You're A Fan of ${band.band_name}!`);
          });
        } else {
          res.json().then((err) => {
            setErrors([err.error]);
            alert(errors);
          });
        }
      });
  }

  function handleDeleteUpdate(bandDEL) {
    setUser({ ...user, favorite_bands: user.favorite_bands.filter((bnd) => bnd.id !== bandDEL.id) });
    
    const updatedBands = bands.map((bnd) =>
    bnd.id === bandDEL.fav_band_id
      ? { ...bnd, favorite_bands: bnd.favorite_bands.filter((favBnd) => favBnd.id !== bandDEL.id) }
      : bnd
  );
  setBands(updatedBands);
  }
  
    function handleUnfav(e) {
    e.preventDefault();
    fetch(`/favorite_bands/${userFavBand.id}`, {
      method: 'DELETE',
    }).then((res) => {
      if (res.ok) {
        handleDeleteUpdate(userFavBand);
        alert(`You're No Longer a Fan of ${band.band_name}!..Bummer..`)
      } else {
        res.json().then((err) => {
          setErrors([err.error]);
        });
      }
    });
    }
  
    return (
    <div>
      <div className='bands-page-container'>
        <h1>{band.band_name}</h1>
        <br/>
        <img src={band.band_img_url} alt={band.band_name} />
        <br/>
        <p>{band.genre}</p>
        {isFav ? (
          <button onClick={(e) => handleUnfav(e)}> Remove From Favorites </button>
        ) : (
          <button onClick={(e) => handleFav(e)}> Add To Favorites </button>
        )}
        {/* Check if events exist in the band object */}
        {band.events && band.events.length > 0 ? (
          <div>
            <h2>Upcoming Events:</h2>
            {band.events.map((event) => (
              <DetailsEvent key={event.id} event={event}/>
            ))}
             <Link to="/bands"> Back to Bands</Link>
          </div>
        ) : (
          <div>
            <p>Events TBA</p>
            <Link to="/bands"> Back to Bands</Link>
          </div>
        )}

      </div>
      {errors ? errors.map((e) => (<ul key={e} style={{color: "red"}}>{e}</ul>)) : null}

    </div>
    )
  }
}

export default DetailsBand;