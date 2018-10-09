// Dependencies
import { combineReducers } from 'redux';

// Containers Reducers
import reducerSlider from '../../components/cover-slider/reducer-slider';
import reducerGridTab from '../../components/content-tabs-grid/reducer-grid-tab';

const rootReducer = combineReducers({
  reducerSlider,
  reducerGridTab
});

export default rootReducer;
