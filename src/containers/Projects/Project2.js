import React, { Component } from 'react'
import Zoomy from 'react-zoomy'
import {ImageButton, H1, H4, ProjectContainer, ScrollDiv, P, ProjectCard, FaviconLink, ModalIcons} from './Projects.style'
import {Grid, Row, Col, Thumbnail, Glyphicon, Badge, Button, Modal, Popover, Tooltip, OverlayTrigger} from 'react-bootstrap'
import './Projects.css'

const Project2 = React.createClass({
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
        <Thumbnail src='https://i.imgur.com/OSfOTMN.gif' alt='242x200' className='thumbnail'>
          <H1>meet & jam</H1>

          <Modal show={this.state.showModal} onHide={this.close} bsSize='large'>
            <Modal.Header closeButton>
              <H1>meet&jam</H1>
            </Modal.Header>
            <Modal.Body>

              <img src='http://i.imgur.com/kqP0rBg.png' id='project2Image' />
              <hr />
              <H4>About</H4>

              <P>meet and jam is my first web application which utilizes a back-end persistent database.  The app aims to connect fellow musicians by providing a platform for them to create jamming events, as well as an opportunity for them to share audio samples of their music with other users.</P>

              <P>By building this application, I became familiar with Create, Read, Update and Destroy(CRUD) functionalities that form the basis of all web applications; utilizing proper HTML verbs to make my routes RESTful (i.e. GET, POST, PUT, DELETE); and consuming external APIs such as Cloudinary(for hosting images) and Google Maps Geocoding.</P>
              <hr />
              <H4>Tech Stack</H4>
              <P>NodeJS, Express, MongoDB</P>
              <P>Deployed on Heroku</P>
              <hr />
              <H4>Check It Out</H4>
              <Row>
                <Col xs={4} md={2}>
                  <FaviconLink href='https://github.com/shirongfoo/project2' target='_blank'><ModalIcons className='fa fa-github fa-2x' />Project Repo</FaviconLink>
                </Col>
                <Col xs={4} md={2}>
                  <FaviconLink href='https://meetandjam.herokuapp.com'target='_blank'><ModalIcons className='fa fa-globe fa-2x' />Live Website</FaviconLink>
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

export default Project2
