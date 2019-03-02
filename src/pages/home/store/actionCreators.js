import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const changeHomeData = data => ({
    type: actionTypes.CHANGE_HOME_DATA,
    articleList: fromJS(data.articleList)
})

const moreAriticles = data => ({
    type: actionTypes.GET_MORE_ARTICLES,
    articleList: fromJS(data.articleList)
})

export const getHomeInfo = () => {
    return dispatch => {
        axios.get('/api/homeData.json').then(res => {
            const data = res.data
            const action = changeHomeData(data)
            dispatch(action)
        })
    }
}

export const getMoreArticles = () => {
    return dispatch => {
        axios.get('/api/articles.json').then(res => {
            const data = res.data
            const action = moreAriticles(data)
            dispatch(action)
        })
    }
}

export const toggleScrollBtn = (show) => ({
    type: actionTypes.TOGGLE_SCROLL_BTN,
    show
})
