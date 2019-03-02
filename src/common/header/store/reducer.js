import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: [],
    list_page: 1,
    list_total_page: 1,
    tip_enter: false,
    tip_leave: true,
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_INPUT_FOCUS:
            return state.set('focused', true)
        case actionTypes.SEARCH_INPUT_BLUR:
            return state.set('focused', false)
        case actionTypes.GET_TIPS:
            return state.set('list', action.data).set('list_total_page', action.list_total_page)
        case actionTypes.TIP_ENTER:
            return state.set('tip_enter', true)
        case actionTypes.TIP_LEAVE:
            return state.set('tip_enter', false)
        case actionTypes.NEXT_PAGE:
            /*
                如果下一页大于总页码, 那么将下一页重新设置为第一页
                否则下一页在原页码上 加 1
            */
            const nextPage =  parseInt(state.get('list_page')) + 1
            const totalPage =  parseInt(state.get('list_total_page'))
            if (nextPage > totalPage) {
                return state.set('list_page', 1)
            } else {
                return state.set('list_page', nextPage)
            }
        default:
            return state
    }
}