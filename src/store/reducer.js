import {combineReducers} from 'redux'
import {reducer as homeReducer} from '../components/home/store'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as sixuexingReducer} from '../components/sixuexing/store'
const reducer = combineReducers({
    home: homeReducer,
    header: headerReducer,
    sixuexing:sixuexingReducer
})

export default reducer