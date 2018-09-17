const initialState = {
  slider: 0
};
export default function reducerSlider(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_POSITION': {
      return {
        ...state,
        slider: action.slider
      };
    }
    default:
      return state;
  }
}
