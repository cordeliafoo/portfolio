import React from 'react'
import {H1, H4, P, FaviconLink, ModalIcons} from './Projects.style'
import {Row, Col, Thumbnail, Modal, Button} from 'react-bootstrap'
import './Projects.css'
var createReactClass = require('create-react-class')

const Project1 = createReactClass({
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
        <Thumbnail src='https://media.giphy.com/media/3o7btTSUFltPTzCRby/giphy.gif' alt='242x200'>
          <H1 style={{fontWeight: 'bold'}}>fat fishy</H1>
          <hr />
          <H4>About</H4>
          <P>I was inspired by a childhood favorite game of mine and decided to re-create it using Javascript.  To challenge myself further, I decided to develop the game entirely using Object Oriented Programming(OOP) to cement and apply the concepts I learnt in my first two weeks of class.  The process was painful but ultimately worthwhile because it made my code more modular and manageable.  It was also much more easily modifiable than if I had creataed my code structure around actions and logic.</P>
          <P>I modified the original version of the game to accomodate two players.  Using keyboard controls, players navigate around the fish tank to consume smaller fish and avoid the biger ones.  Players morph into bigger-sized fish when they have eaten enough fishys.</P>
          <hr />
          <H4>Tech Stack</H4>
          <P>Javascript, HTML(with HTML canvas element), CSS</P>
          <P>Deployed on github pages</P>
           <hr />
           <H4>Check It Out</H4>
           <Row>
             <Col xs={4} md={2}>
               <FaviconLink href='https://github.com/shirongfoo/wdi-project-1-shirongfoo' target='_blank'><ModalIcons className='fa fa-github fa-2x'/>Project Repo</FaviconLink>
             </Col>
             <Col xs={4} md={2}>
               <FaviconLink href='https://shirongfoo.github.io/wdi-project-1-shirongfoo/'target='_blank'><ModalIcons className='fa fa-globe fa-2x'/>Live Website</FaviconLink>
             </Col>
           </Row>
        </Thumbnail>
      </div>

      // <div onClick={this.open} className='projectCard'>
      //   <Thumbnail src='https://media.giphy.com/media/3o7btTSUFltPTzCRby/giphy.gif' alt='242x200' className='thumbnail'>
      //     <H1>fat fishy</H1>
      //
      //     <Modal show={this.state.showModal} onHide={this.close} bsSize='large'>
      //       <Modal.Header closeButton>
      //         <H1>fat fishy</H1>
      //       </Modal.Header>
      //       <Modal.Body>
      //         <img src='http://i.imgur.com/VxHXNDV.png' alt='project1'/>
      //         <hr />
      //         <H4>About</H4>
      //
      //         <P>I was inspired by a childhood favorite game of mine and decided to re-create it using Javascript.  To challenge myself further, I decided to develop the game entirely using Object Oriented Programming(OOP) to cement and apply the concepts I learnt in my first two weeks of class.  The process was painful but ultimately worthwhile because it made my code more modular and manageable.  It was also much more easily modifiable than if I had creataed my code structure around actions and logic.</P>
      //         <P>I modified the original version of the game to accomodate two players.  Using keyboard controls, players navigate around the fish tank to consume smaller fish and avoid the biger ones.  Players morph into bigger-sized fish when they have eaten enough fishys.</P>
      //         <hr />
      //         <H4>Tech Stack</H4>
      //         <P>Javascript, HTML(with HTML canvas element), CSS</P>
      //         <P>Deployed on github pages</P>
      //
      //         <hr />
      //         <H4>Check It Out</H4>
      //         <Row>
      //           <Col xs={4} md={2}>
      //             <FaviconLink href='https://github.com/shirongfoo/wdi-project-1-shirongfoo' target='_blank'><ModalIcons className='fa fa-github fa-2x'/>Project Repo</FaviconLink>
      //           </Col>
      //           <Col xs={4} md={2}>
      //             <FaviconLink href='https://shirongfoo.github.io/wdi-project-1-shirongfoo/'target='_blank'><ModalIcons className='fa fa-globe fa-2x'/>Live Website</FaviconLink>
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

export default Project1
