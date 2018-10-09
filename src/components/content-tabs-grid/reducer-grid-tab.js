const initialState = {
  tab: 0
};
export default function reducerGridTab(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TAB': {
      return {
        ...state,
        tab: action.tab
      };
    }
    default:
      return state;
  }
}
