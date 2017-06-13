import React, { Component } from 'react'
import Zoomy from 'react-zoomy'
import {ImageButton, H1, H4, ProjectContainer, ScrollDiv, P, ProjectCard, FaviconLink, ModalIcons} from './Projects.style'
import {Grid, Row, Col, Thumbnail, Glyphicon, Badge, Button, Modal, Popover, Tooltip, OverlayTrigger} from 'react-bootstrap'

const Project4 = React.createClass({
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

      <ProjectCard onClick={this.open}>
        <Thumbnail src='https://i.imgur.com/085xC6U.gif' alt='242x200' style={{height: 280}}>
          <H1>shopppit</H1>

          <Modal show={this.state.showModal} onHide={this.close} bsSize='large'>
            <Modal.Header closeButton>
              <H1>Shopppit</H1>
            </Modal.Header>
            <Modal.Body>
              <H4>About</H4>
              <P>Shopppit (with three Ps (!!) because shopit and shoppit were already taken)
                      is my 4th and final project as a Web Development Immersive student at General Assembly Singapore.
                      This app pays homage to a vice that surfaces whenever I'm stressed (which happened a lot throughout my time at WDI) - online shopping.</P>

              <P>I wanted to walk myself through the steps of actually building an ecommerce website from both the user's and admin/business owner's perspective.
                      This process also helped myself to consolidate and solidify front-end and back-end skills that I have picked up over the last three months.</P>
              <hr />
              <H4>Tech Stack</H4>
              <P>Node js, Express, MongoLab, Bootstrap with deployment on Heroku</P>
              <hr />
              <H4>Check It Out</H4>
              <Row>
                <Col xs={1} md={2}>
                  <FaviconLink href='https://github.com/shirongfoo/wdi-project-4' target='_blank'><ModalIcons className='fa fa-github fa-2x'/>Project Repo</FaviconLink>
                </Col>
                <Col xs={1} md={2}>
                  <FaviconLink href='https://shopppit.herokuapp.com' target='_blank'><ModalIcons className='fa fa-paw fa-2x'/>Website</FaviconLink>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Thumbnail>
      </ProjectCard>

    )
  }
})

export default Project4
