import React from 'react'
import {IndexRoute, Router, Route, hashHistory} from 'react-router'
import Home from './containers/Home/Home'
import Home2 from './containers/Home/Home2'
import App from './containers/App/App'
import Projects from './containers/Projects/Projects'
import Resume from './containers/Resume/Resume'
import Skills from './containers/Skills/Skills'

export default(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home2} />
      <Route path='/projects' component={Projects} />
      <Route path='/skills' component={Skills} />
      <Route path='/resume' component={Resume} />
    </Route>
  </Router>
)

Router.prototype.componentWillReceiveProps = function (nextProps) {
  let components = []
  function grabComponents (element) {
    // This only works for JSX routes, adjust accordingly for plain JS config
    if (element.props && element.props.component) {
      components.push(element.props.component)
    }
    if (element.props && element.props.children) {
      React.Children.forEach(element.props.children, grabComponents)
    }
  }
  grabComponents(nextProps.routes || nextProps.children)
  components.forEach(React.createElement) // force patching
}
