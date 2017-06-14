import React, { Component } from 'react'
import Zoomy from 'react-zoomy'
import {ImageButton, H1, H4, ProjectContainer, ScrollDiv, P, ProjectCard, FaviconLink, ModalIcons} from './Projects.style'
import {Grid, Row, Col, Thumbnail, Glyphicon, Badge, Button, Modal, Popover, Tooltip, OverlayTrigger} from 'react-bootstrap'
import './Projects.css'

const Project5 = React.createClass({
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
        <Thumbnail src='https://i.imgur.com/zLWnhA2.gif' style={{height: 280}}>
          <H1>the 30 day project</H1>

          <Modal show={this.state.showModal} onHide={this.close} bsSize='large'>
            <Modal.Header closeButton>
              <H1>the 30 day project</H1>
            </Modal.Header>
            <Modal.Body>
              <img src='http://i.imgur.com/vuiIKci.png' id='modalImg'></img>
              <hr />
              <H4>About</H4>
\              <P>I'm especially proud of this project because it was created as a personal project in an attempt to overcome my phobia of coding and get my feet wet in the world of web development.  The 30DayProject is my personal spin on the #The100DayProject, where I build one small little website a day for 30 days. </P>
              <P> Most of the sites are purely experimental and educational, with very simple features and functionality.  Their silliness brought a smile to my face and I hope they have the same effect on you.  I even managed to consume a few APIs, including a weather and a word-synonym one.  My favorites are 'Create a Monet', 'Kill the Roach', and 'Constellations'.  Throughout this process, I celebrated the little victories, learned the art of troubleshooting, made friends with stack overflow, and gained a smidgen of confidence, and basically had a blast.  Technology does not seem so scary after all!</P>
              <hr />
              <H4>Tech Stack</H4>
              <P>Purely Front-End - Javascript, HTML, CSS</P>
              <P>Site hosted on webhostingforstudents</P>
              <hr />
              <H4>Check It Out</H4>
              <Row>
                <Col xs={1} md={2}>
                  <FaviconLink href='https://rongfoo.com' target='_blank'><ModalIcons className='fa fa-globe fa-2x'/>Live Website</FaviconLink>
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

export default Project5
