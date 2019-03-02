import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

export const searchFocus = () => ({
    type: actionTypes.SEARCH_INPUT_FOCUS
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_INPUT_BLUR
})

export const tipEnter = () => ({
    type: actionTypes.TIP_ENTER
})

export const tipLeave = () => ({
    type: actionTypes.TIP_LEAVE
})

export const nextPage = () => ({
    type: actionTypes.NEXT_PAGE
})

export const changeTipList = data => ({
    type: actionTypes.GET_TIPS,
    data: fromJS(data),
    list_total_page: Math.ceil(data.length / 10)
})

export const getTipList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            const data = res.data.data
            const action = changeTipList(data)
            dispatch(action)
        }).catch(() => {
            console.log('请求json数据失败')
        })
    }
}
