import {combineReducers} from 'redux'
import {reducer as homeReducer} from '../components/home/store'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as sixuexingReducer} from '../components/sixuexing/store'
import {reducer as downloadReducer} from '../components/download/store'
import teacherReducer from '../store/teacher/reducer'
import courseReducer from '../store/allCourse/reducer'
const reducer = combineReducers({
    home: homeReducer,
    header: headerReducer,
    sixuexing:sixuexingReducer,
    download:downloadReducer,
    teacher:teacherReducer,
    course:courseReducer
})

export default reducer