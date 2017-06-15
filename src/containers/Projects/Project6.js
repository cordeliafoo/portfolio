import React from 'react'
import {H1, H4, P, FaviconLink, ModalIcons} from './Projects.style'
import {Row, Col, Thumbnail, Modal, Button} from 'react-bootstrap'
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

      <div className='projectCard'>
        <Thumbnail src='https://i.imgur.com/rVXCSAW.gif' alt='242x200'>
          <H1>my WDI portfolio</H1>
                 <hr />
                 <H4>About</H4>
                 <P>It's web-ception time!  My last and final assignment for the WDI course involved me building a website to house all the projects that I completed over the past 12 weeks.  I decided to trying creating a react application since I had never tried using this front-end framework before.  It was a refreshing exprerience to navigate around my site wihout seeing the browser refresh (yes I am aware of this horrible pun!).  Consolidating my achievements over the past couple weeks was indeed a satisfying process and I enjoyed making this simple but (hopefully) effective portfolio site.</P>
                 <hr />
                 <H4>Tech Stack</H4>
                 <P>ReactJS, HTML, CSS</P>
                 <P>Deployed on Firebase</P>
                 <hr />
                 <H4>Check It Out</H4>
                 <Row>
                   <Col xs={4} md={2}>
                     <FaviconLink href='https://github.com/shirongfoo/portfolio' target='_blank'><ModalIcons className='fa fa-github fa-2x'/>Project Repo</FaviconLink>
                   </Col>
                   <Col xs={4} md={2}>
                     <FaviconLink href='https://shirongfoo.me' target='_blank'><ModalIcons className='fa fa-globe fa-2x'/>Live Website (you are on it!)</FaviconLink>
                   </Col>
                 </Row>

        </Thumbnail>
      </div>
      // <div onClick={this.open} className='projectCard'>
      //   <Thumbnail src='https://i.imgur.com/rVXCSAW.gif' alt='242x200' className='thumbnail'>
      //     <H1>my portfolio</H1>
      //
      //     <Modal show={this.state.showModal} onHide={this.close} bsSize='large'>
      //       <Modal.Header closeButton>
      //         <H1>my portfolio</H1>
      //       </Modal.Header>
      //       <Modal.Body>
      //         <img src='http://i.imgur.com/57jbNuj.png' alt='project6'></img>
      //         <hr />
      //         <H4>About</H4>
      //         <P>It's web-ception time!  My last and final assignment for the WDI course involved me building a website to house all the projects that I completed over the past 12 weeks.  I decided to trying creating a react application since I had never tried using this front-end framework before.  It was a refreshing exprerience to navigate around my site wihout seeing the browser refresh (yes I am aware of this horrible pun!).  Consolidating my achievements over the past couple weeks was indeed a satisfying process and I enjoyed making this simple but (hopefully) effective portfolio site.</P>
      //         <hr />
      //         <H4>Tech Stack</H4>
      //         <P>ReactJS, HTML, CSS</P>
      //         <P>Deployed on Firebase</P>
      //         <hr />
      //         <H4>Check It Out</H4>
      //         <Row>
      //           <Col xs={4} md={2}>
      //             <FaviconLink href='https://github.com/shirongfoo/portfolio' target='_blank'><ModalIcons className='fa fa-github fa-2x'/>Project Repo</FaviconLink>
      //           </Col>
      //           <Col xs={4} md={2}>
      //             <FaviconLink href='https://shirongfoo.me' target='_blank'><ModalIcons className='fa fa-globe fa-2x'/>Live Website (you are on it!)</FaviconLink>
      //           </Col>
      //         </Row>
      //       </Modal.Body>
      //       <Modal.Footer>
      //         <Button onClick={this.close}>Close</Button>
      //       </Modal.Footer>
      //     </Modal>
      //   </Thumbnail>
      // </div>

    )
  }
})

export default Project4
