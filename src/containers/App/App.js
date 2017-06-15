import React, { Component } from 'react'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import PropTypes from 'prop-types';

class App extends Component {
  render () {
    return (
      <div>
        <NavigationBar />
        {this.props.children}
      </div>
    )
  }
}

export default App
