import React, { Component, Fragment } from 'react'
import { RecommendWriterList, WriterItem, RecommendTitle } from '../style'
import { connect } from 'react-redux'

class WriterList extends Component {
    render() {
        const { writerList } = this.props
        console.log(writerList)
        var c = "red"
        return (
            <Fragment>
                <RecommendTitle>推荐作者</RecommendTitle>
                <RecommendWriterList>
                    <WriterItem yanse={c}>
                        <i className="avator">人脸</i>
                        <div className="desc">
                            <a href="/">作者的名字</a>
                            <p>写了128.6k字. 451喜欢</p>
                        </div>
                        <i className="follow">关注</i>
                    </WriterItem>
                </RecommendWriterList>
            </Fragment>
        )
    }
}

const mapState = state => {
    return {
        writerList: state.get('home').get('writerList')
    }
}

export default connect(mapState, null)(WriterList)