import React, { Component, Fragment } from 'react'
import { GlobalStyle } from './style'
import { GlobalIconFont } from './static/iconfont/iconfont'
import Header from './common/header/index'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Detail from './pages/detail/index'
import Home from './pages/home/index'
import store from './store/index'

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <GlobalIconFont />
                <Provider store={ store }>
                    <Header />
                    <BrowserRouter>
                        <Fragment>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/detail" component={Detail}/>
                        </Fragment>
                    </BrowserRouter>
                </Provider>
            </Fragment>
        )
    }
}

export default App
