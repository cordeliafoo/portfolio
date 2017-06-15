import React, { Component } from 'react'
import Zoomy from 'react-zoomy'
import {ImageButton, H1, H4, ProjectContainer, ScrollDiv, P, ProjectCard, FaviconLink, ModalIcons} from './Projects.style'
import {Grid, Row, Col, Thumbnail, Glyphicon, Badge, Button, Modal, Popover, Tooltip, OverlayTrigger} from 'react-bootstrap'
import './Projects.css'
var createReactClass = require('create-react-class');



const Project4 = createReactClass({
  getInitialState () {
    return { showModal: false }
  },

  close () {
    this.setState({ showModal: false })
  },

  open () {
    this.setState({ showModal: true })
  },

  render () {
    return (

      <div onClick={this.open} className='projectCard'>
        <Thumbnail src='https://i.imgur.com/085xC6U.gif' alt='242x200' className='thumbnail'>
          <H1>shopppit</H1>

          <Modal show={this.state.showModal} onHide={this.close} bsSize='large'>
            <Modal.Header closeButton>
              <H1>Shopppit</H1>
            </Modal.Header>
            <Modal.Body>
              <img src='http://i.imgur.com/C4i5hY4.png'></img>
              <hr />
              <H4>About</H4>

              <P>Shopppit (with three Ps (!!) because shopit and shoppit were already taken)
                      is my 4th and final project as a Web Development Immersive student at General Assembly Singapore.
                      This app pays homage to a vice that surfaces whenever I'm stressed (which happened a lot throughout my time at WDI) - online shopping.</P>

              <P>I wanted to walk myself through the steps of actually building an ecommerce website from both the user's and admin/business owner's perspective.
                      This process also helped myself to consolidate and solidify front-end and back-end skills that I have picked up over the last three months.</P>
              <hr />
              <H4>Tech Stack</H4>
              <P>NodeJS, Express, MongoDB, Bootstrap Framework.</P>
              <P>Deployed on Heroku</P>
              <hr />
              <H4>Check It Out</H4>
              <Row>
                <Col xs={4} md={2}>
                  <FaviconLink href='https://github.com/shirongfoo/wdi-project-4' target='_blank'><ModalIcons className='fa fa-github fa-2x'/>Project Repo</FaviconLink>
                </Col>
                <Col xs={4} md={2}>
                  <FaviconLink href='https://shopppit.herokuapp.com' target='_blank'><ModalIcons className='fa fa-globe fa-2x'/>Live Website</FaviconLink>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Thumbnail>
      </div>

    )
  }
})

export default Project4
