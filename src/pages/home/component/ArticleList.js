import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ArticleListItem, ArticleListInfo } from '../style'

class ArticleList extends Component {
    render() {
        const { articleList } = this.props
        return articleList.map(item => {
            return (
                <ArticleListItem key={item.get('id')}>
                    <img className="pic" src={item.get('imgUrl')} alt="xxx" />
                    <ArticleListInfo>
                        <a className="title" href="/">
                            {item.get('title')}
                        </a>
                        <p className="desc">{item.get('desc')}</p>
                        <div className="status">
                            <a className="author" href="/">
                                {item.get('author')}
                            </a>
                        </div>
                    </ArticleListInfo>
                </ArticleListItem>
            )
        })
    }
}

const mapState = state => {
    return {
        articleList: state.get('home').get('articleList')
    }
}

export default connect(mapState, null)(ArticleList)
