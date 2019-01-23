//-----------------------------------------------------------------------------
// src/store/actions/places.js
//-----------------------------------------------------------------------------
import {
  SET_PLACES,
  ADD_PLACE,
  DELETE_PLACE }  from './actionTypes'
import {uiStartLoading, uiStopLoading } from './index'

export const addPlace = (placeName, location, image) => {
  //-------------------------------------------------------
  // OLD REDUX CODE
  //    return {
  //      type:       ADD_PLACE,
  //      placeName:  placeName,
  //      location:   location,
  //      image:      image,
  //    }
  //-------------------------------------------------------

  return dispatch => {
    const storeImageUrl = 'https://us-central1-awesome-places-228223.cloudfunctions.net/storeImage'

    dispatch(uiStartLoading())

    fetch(storeImageUrl, {
      method: 'POST',
      body:   JSON.stringify({
        image: image.base64
      })
    })
    .catch(err => {
      console.log(err)
      dispatch(uiStopLoading())
    })
    .then(res => res.json())
    .then(parsedRes => {
      const placeData = {
        name:       placeName,
        location:   location,
        image:      parsedRes.imageUrl,
      }

      return fetch('https://awesome-places-228223.firebaseio.com/places.json', {
        method: 'POST',
        body:   JSON.stringify(placeData)
      })
    })
    .catch(err => {
      console.log('ERROR: Failed to post place ', err)
      dispatch(uiStopLoading())
    })
    .then(res => res.json())
    .then(parsedRes => {
      console.log('INFO: Saved place ', parsedRes)
      dispatch(uiStopLoading())
    })
  }
}

export const getPlaces = () => {
  return dispatch => {
    fetch('https://awesome-places-228223.firebaseio.com/places.json')
    .catch(err => {
      alert('Something went wrong', err)
      console.log('ERROR: Failed to get places - ', err)
    })
    .then(res => res.json())
    .then(parsedRes => {
      const places = []
      for(let key in parsedRes) {
        places.push({
          ...parsedRes[key],
          image: {
            uri: parsedRes[key].image
          },
          key: key,
        })
      }
      dispatch(setPlaces(places))
    })

  }
}

/**
 * Add the places retrieved to the redux state when the FindPlaceScreen
 * mounts
 */
export const setPlaces = (places) => {
  return {
    type:     SET_PLACES,
    places:   places,
  }

}

export const deletePlace = (key) => {
  return {
    type:     DELETE_PLACE,
    placeKey: key,
  }
}
