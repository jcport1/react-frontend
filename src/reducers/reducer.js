import managePainting from './managePainting'
import manageFavorite from './manageFavorite'
import { combineReducers } from 'redux'

export const reducer = combineReducers({
    paintings: managePainting,
    favorites: manageFavorite 
})