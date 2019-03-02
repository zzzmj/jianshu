import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    HeaderWrapper,
    Logo,
    NavList,
    NavItem,
    NavSearch,
    SearchTips,
    SearchTipsWrap,
    SearchTrendTitle,
    SearchTrendTag,
    SearchTrendTagItem,
    Addition,
    Button
} from './style'
import { actionCreators } from './store'

class Header extends Component {
    getSearchTip() {
        const { focused, list, list_page, tip_enter, handleTipEnter, handleTipLeave, handleNextPage } = this.props
        if (focused || tip_enter) {
            // 搜索框小提示分页操作, 每栏显示十个标签
            const page = parseInt(list_page)
            const NUMBER_OF_ITEM = 10
            const start = NUMBER_OF_ITEM * (page - 1)
            const end = NUMBER_OF_ITEM * page
            const curList = list.slice(start, end)
            return (
                <SearchTips onMouseEnter={handleTipEnter} onMouseLeave={handleTipLeave}>
                    <SearchTipsWrap>
                        <SearchTrendTitle>
                            <span>热门搜索</span>
                            <span onClick={handleNextPage} className="next-page right">换一批</span>
                        </SearchTrendTitle>
                        <SearchTrendTag>
                            {curList.map(item => {
                                return (
                                    <SearchTrendTagItem key={item}>
                                        {item}
                                    </SearchTrendTagItem>
                                )
                            })}
                        </SearchTrendTag>
                    </SearchTipsWrap>
                </SearchTips>
            )
        } else {
            return null
        }
    }

    render() {
        const { focused, handleInputBlur, handleInputFocus, list } = this.props
        return (
            <HeaderWrapper>
                <Logo />
                <NavList>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="left gray search">
                        <NavSearch
                            className={focused ? 'focused' : ''}
                            onFocus={() => {handleInputFocus(list)}}
                            onBlur={handleInputBlur}
                            placeholder="搜索"
                        />
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>
                            &#xe637;
                        </i>

                        {this.getSearchTip()}
                    </NavItem>
                    <NavItem className="right gray">登录</NavItem>
                    <NavItem className="right gray">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                </NavList>
                <Addition>
                    <Button className="reg">
                        <span>注册</span>
                    </Button>
                    <Button className="write">
                        <i className="iconfont">&#xe615;</i>
                        <span>写文章</span>
                    </Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        list_page: state.getIn(['header', 'list_page']),
        list_total_page: state.getIn(['header', 'list_total_page']),
        tip_enter: state.getIn(['header', 'tip_enter']),
        tip_leave: state.getIn(['header', 'tip_leave'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleInputFocus(list) {
            // list为空时, 才请求数据
            if (list.size === 0) {
                dispatch(actionCreators.getTipList())
            }
            dispatch(actionCreators.searchFocus())
        },

        handleInputBlur() {
            const action = actionCreators.searchBlur()
            dispatch(action)
        },

        handleTipEnter() {
            const action = actionCreators.tipEnter()
            dispatch(action)
        },

        handleTipLeave() {
            const action = actionCreators.tipLeave()
            dispatch(action)
        },

        handleNextPage() {
            const action = actionCreators.nextPage()
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
