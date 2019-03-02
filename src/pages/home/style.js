import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
`

export const HomeLeft = styled.div`
    width: 66.66667%;
    float: left;
`

export const HomeRight = styled.div`
    width: 33.33333%;
    float: right;
    padding-left: 40px;
`

export const HomeContent = styled.div`
    overflow: hidden;
    padding: 30px 20px 0px 20px;
    .banner-img {
        width: 100%;
        height: 260px;
        border-radius: 5px;
    }
`

export const HomeBannerImg = styled.div`
    padding-bottom: 30px;
`

export const ArticleListItem = styled.div`
    position: relative;
    overflow: hidden;
    .pic {
        position: absolute;
        top: 50%;
        right: 0;
        height: 100px;
        border-radius: 3px;
        transform: translateY(-50%);
    }
    margin-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
`

export const ArticleListInfo = styled.div`
    padding-right: 165px;
    float: left;
    .title {
        display: inline-block;
        color: #333;
        font-weight: 700;
        line-height: 1.5;
        font-size: 19px;
        text-decoration: none;
        margin-bottom: 20px;
        :hover {
            text-decoration: underline;
        }
    }

    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }

    .status {
        .author {
            font-size: 12px;
            color: #999;
            text-decoration: none;
            :hover {
                color: #555;
            }
        }
        margin: 15px 0px;
    }
`

export const RecommendWrap = styled.div`
    margin-top: -4px;
    .pic {
        width: 100%;
        min-height: 39px;
        margin-bottom: 6px;
    }
`

export const ReadMore = styled.a`
    display: block;
    width: 100%;
    border: none;
    border-radius: 20px;
    background-color: #a5a5a5;
    line-height: 20px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    :hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, .4);
    }
`

export const RecommendTitle = styled.span`
    font-size: 14px;
    color: #969696;
`

export const RecommendWriterList = styled.ul`
    
`

export const WriterItem = styled.li`
    position: relative;
    margin: 15px 0;
    .avator {
        position: absolute;
        height: 50px;
        width: 50px;
    }

    .follow {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 13px;
        color: #42c02e;
        cursor: pointer;
    }

    .desc {
        padding-left: 65px;
        a {
            display: block;
            text-decoration: none;
            color: ${ props => props.yanse }
        }

        p {
            margin-top: 5px;
            font-size: 12px;
            color: #969696;
        }
    }
`


export const ScrollTop = styled.div`
    position: fixed;
    right: 50px;
    bottom: 50px;
    border: 1px solid #333;
    padding: 10px;
    :hover {
        cursor: pointer;
    }
`