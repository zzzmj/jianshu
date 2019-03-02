import React, { Component } from 'react'
import {
    HomeWrapper,
    HomeContent,
    HomeLeft,
    HomeRight,
    HomeBannerImg
} from './style'
import ArticleList from './component/ArticleList'
import Recommend from './component/Recommend'
import WriterList from './component/WriterList'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { ReadMore, ScrollTop } from './style'

class Home extends Component {
    handleScrollTop() {
        window.scrollTo(0, 0)
    }

    render() {
        const { handleReadMore, showScrollBtn } = this.props
        console.log(showScrollBtn)
        return (
            <HomeWrapper>
                <HomeContent>
                    <HomeLeft>
                        <HomeBannerImg>
                            <img
                                className="banner-img"
                                src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                                alt=""
                            />
                        </HomeBannerImg>
                        <ArticleList />
                        <ReadMore onClick={handleReadMore}>阅读更多</ReadMore>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <WriterList />
                    </HomeRight>
                </HomeContent>
                {showScrollBtn ? (
                    <ScrollTop onClick={this.handleScrollTop}>
                        返回顶部
                    </ScrollTop>
                ) : null}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        const { change_home_data, changeScrollBtnShow } = this.props
        change_home_data()
        window.addEventListener('scroll', changeScrollBtnShow)
    }
}

const mapState = state => ({
    showScrollBtn: state.getIn(['home', 'showScrollBtn'])
})

const mapDispatch = dispatch => ({
    change_home_data() {
        dispatch(actionCreators.getHomeInfo())
    },

    handleReadMore() {
        dispatch(actionCreators.getMoreArticles())
    },

    changeScrollBtnShow() {
        const pageYOffset = document.documentElement.scrollTop
        if (pageYOffset > 200) {
            dispatch(actionCreators.toggleScrollBtn(true))
        } else {
            dispatch(actionCreators.toggleScrollBtn(false))
        }
    }
})

export default connect(
    mapState,
    mapDispatch
)(Home)
