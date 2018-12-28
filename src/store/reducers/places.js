//-----------------------------------------------------------------------------
// src/store/reducers/places.js
//-----------------------------------------------------------------------------
import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE } from '../actions/actionTypes'

// Import image so it is available in the ADD_PLACE reducer
import placeImage           from '../../assets/Machu_Pichu.jpg'

// Set the initialState
const initialState = {
  places:         [],
  selectedPlace:  null,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key:    Math.random().toString(),
          name:   action.placeName,
          image:  placeImage
        }),
      }
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter( (place) => place.key !== state.selectedPlace.key),
        selectedPlace: null,
      }
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey
        })
      }
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null,
      }
    default:
      return state
  }
}

export default reducer
