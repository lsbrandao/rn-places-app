import {
  ADD_PLACE,
  DELETE_PLACE,
} from '../actions/actionTypes';

import torontoImage from '../../assets/toronto.jpg';

const initialState = {
  places: [
    {
      key: Math.random().toString(),
      name: 'Toronto',
      image: torontoImage
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.placeName,
          image: {
            uri:
              "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        })
      };
    default:
      return state;
  }
};

export default reducer;