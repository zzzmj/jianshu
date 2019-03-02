import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    articleList: [],
    writerList: ['呵呵哒', '123', 'wsm'],
    showScrollBtn: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                articleList: action.articleList
            })
        case actionTypes.GET_MORE_ARTICLES:
            return state.merge({
                articleList: state.get('articleList').concat(action.articleList)
            })
        case actionTypes.TOGGLE_SCROLL_BTN:
            return state.set('showScrollBtn', action.show)
        default:
            return state
    }
}
