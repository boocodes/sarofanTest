import {combineReducers} from '@reduxjs/toolkit';
import CardReducer from './card/reducer';

const rootReducer = combineReducers({
    card: CardReducer,
})



export default rootReducer;