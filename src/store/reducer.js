import {combineReducers} from 'redux'
import {reducer as homeReducer} from '../containers/home/store'
import {reducer as headerReducer} from '../components/header/store'
const reducer = combineReducers({
    home:homeReducer,
    header:headerReducer
})

export default reducer