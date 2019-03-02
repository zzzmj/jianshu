import { combineReducers } from 'redux-immutable'
import { reducer as headReducer } from '../common/header/store'
import { reducer as HomeReducer } from '../pages/home/store'

const reducer = combineReducers({
    header: headReducer,
    home: HomeReducer
})

export default reducer
