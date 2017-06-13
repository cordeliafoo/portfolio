import React, { Component } from 'react'
import Zoomy from 'react-zoomy'
import {ImageButton, H1, H4, ProjectContainer, ScrollDiv, P, ProjectCard, FaviconLink, ModalIcons} from './Projects.style'
import {Grid, Row, Col, Thumbnail, Glyphicon, Badge, Button, Modal, Popover, Tooltip, OverlayTrigger} from 'react-bootstrap'

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
              <H4>About</H4>
              <P>the 30 day project</P>
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

export default Project5
