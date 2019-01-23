//-----------------------------------------------------------------------------
// src/store/reducers/places.js
//-----------------------------------------------------------------------------
import {
  SET_PLACES,
  ADD_PLACE,
  DELETE_PLACE } from '../actions/actionTypes'

// Import image so it is available in the ADD_PLACE reducer
import placeImage           from '../../assets/Machu_Pichu.jpg'

// Set the initialState
const initialState = {
  places:         [],
  selectedPlace:  null,
}

var Global_Id_Ctr = 1

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PLACES:
      return {
        ...state,
        places: action.places,
      }
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key:      (Global_Id_Ctr++).toString(),
          name:     action.placeName,
          location: action.location,
          image:    { uri: action.image.uri },
        }),
      }
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter( (place) => place.key !== action.placeKey),
        selectedPlace: null,
      }
    default:
      return state
  }
}

export default reducer
