import React, { Component } from 'react'
import { NavigationContainer, NavItem } from './NavigationBar.style'
import {Grid, Row, Col, Thumbnail, Glyphicon, Badge, Button } from 'react-bootstrap'
import './NavigationBar.css'



class NavigationBar extends Component {
  render () {
    return (
      <div className='NavigationContainer'>
          <NavItem to='/' style={{ textDecoration: 'none'}}  ><span>Home</span></NavItem>
          <NavItem to='/projects' style={{ textDecoration: 'none' }} activeStyle={{color: 'tomato'}} ><span>Web Projects</span></NavItem>
          <NavItem to='/skills' style={{ textDecoration: 'none' }} activeStyle={{color: 'tomato'}}><span>Tech Skills</span></NavItem>
      </div>
    )
  }
}

export default NavigationBar
