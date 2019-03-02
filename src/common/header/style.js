import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.nav`
    position: relative;
    height: 3.5rem;
    width: 100%;
    border-bottom: .0625rem solid #f0f0f0;
`

export const Logo = styled.a`
    width: 6.25rem;
    height: 3.5rem;
    display: inline-block;
    background: url(${logoPic});
    background-size: contain;
    background-repeat: no-repeat;
    :hover {
        cursor: pointer;
    }
`

export const NavList = styled.ul`
    width: calc(100% - 320px);
    height: 3.5rem;
    display: inline-block;
    margin: 0 auto;
`

export const NavItem = styled.li`
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    line-height: 1.5rem;
    padding: 1rem;
    vertical-align: center;
    &.left {
        float: left;
    }
    &.right {
        float: right;
    }
    &.active {
        color: #ea6f5a;
    }
    &.gray {
        color: #969696;
    }
    &.search {
        padding: .5rem 1rem;
        .iconfont {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 20px;
            width: 30px;
            font-size: 20px;
            line-height: 30px;
            text-align: center;
            border-radius: 50%;
            &.focused {
                background: #969696;
                color: #ffffff;
            }
        }

        
    }
`

export const NavSearch = styled.input`
    transition: width .5s ease-out;
    padding: 0 2.5rem 0 1.25rem;
    width: 10rem;
    height: 2.375rem;
    font-size: .875rem;
    border: .0625rem solid #eee;
    border-radius: 2.5rem;
    background: #eee;
    &.focused {
        transition: width .5s ease-out;
        width: 13rem;
    }
`

export const SearchTips = styled.div`
    position: absolute;
    top: 100%;
    width: 250px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    border-radius: 3px;
`

export const SearchTipsWrap = styled.div`
    padding: 15px;
`

export const SearchTrendTitle = styled.p`
    font-size: 12px;
    .next-page {
        cursor: pointer;
    }
    .right {
        float: right;
    }
`

export const SearchTrendTag = styled.ul`
    margin-top: 10px;
`

export const SearchTrendTagItem = styled.li`
    display: inline-block;
    padding: 2px 5px;
    margin: 5px 10px 4px 0px;
    font-size: 10px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    :hover {
        cursor: pointer;
        border: 1px solid #bbb;
    }
`

export const Addition = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    padding: 9px 0;
`

export const Button = styled.button`
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    background-color: transparent;
    font-size: 15px;
    color: #ea6f5a;
    line-height: 38px;
    font-weight: 400;
    margin: 0 10px;
    cursor: pointer;
    &.reg {
        width: 80px;
    }

    &.write {
        width: 100px;
        color: #fff;
        background-color: #ea6f5a;
    }
`


