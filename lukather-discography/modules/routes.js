import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Years from './Years'
import YearsContainer from './YearsContainer'
import Year from './Year'
import Home from './Home'

module.exports = (
    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/years" component={YearsContainer}>
    <Route path="/years/:year" component={Year}/>
    </Route>
    <Route path="/about" component={About}/>
    </Route>
)
