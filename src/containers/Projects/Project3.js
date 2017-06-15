import React, { Component } from 'react'
import Zoomy from 'react-zoomy'
import {ImageButton, H1, H4, ProjectContainer, ScrollDiv, P, ProjectCard, FaviconLink, ModalIcons} from './Projects.style'
import {Grid, Row, Col, Thumbnail, Glyphicon, Badge, Button, Modal, Popover, Tooltip, OverlayTrigger} from 'react-bootstrap'
import './Projects.css'

const Project3 = React.createClass({
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
        <Thumbnail src='https://i.imgur.com/KenoeOd.gif' alt='242x200' className='thumbnail'>
          <H1>whichcraft</H1>

          <Modal show={this.state.showModal} onHide={this.close} bsSize='large'>
            <Modal.Header closeButton>
              <H1>whichcraft</H1>
            </Modal.Header>
            <Modal.Body>
              <img src='http://i.imgur.com/GJuowgX.png' id='project2Image' />
              <hr />
              <H4>About</H4>

              <P>This was my first project using Ruby on Rails!  I also levelled up on my git version control skills because this was a group project which required us to manage the pulling and merging of different branches/features each of us were working on.  Whichcraft is a UX-focused app that seeks to bring bespoke crafts and services to the larger community, and allow for craftsmen to advertise and share their skills and expertise.  We threw in a couple of APIs including Stripe-connect(to handle the payment infrastructure required for a marketplace-based app like ours), and Cloudinary for image and video hosting. </P>
              <hr />
              <H4>Tech Stack</H4>
              <P>Ruby on Rails, PostgreSQL, Javascript, HTML, CSS, Materialize by Google</P>
              <P>Deployed on Heroku</P>
              <hr />
              <H4>Check It Out</H4>
              <Row>
                <Col xs={4} md={2}>
                  <FaviconLink href='https://github.com/wdi-sg/wdi-project-3-the-dream-team' target='_blank'><ModalIcons className='fa fa-github fa-2x'/>Project Repo</FaviconLink>
                </Col>
                <Col xs={4} md={2}>
                  <FaviconLink href='https://whichcraft.herokuapp.com/' target='_blank'><ModalIcons className='fa fa-globe fa-2x'/>Live Website</FaviconLink>
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

export default Project3
