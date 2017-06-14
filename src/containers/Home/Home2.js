import React, {Component, PropTypes} from 'react'
import {Relative, FlexBox} from '../../theme/grid'
import {ImageDiv, H1, H2, LandingDiv, FaviconLink, FormDiv, MainDiv, ResumeLink, ResumeDiv} from './Home.style'
import {Grid, Row, Col, Thumbnail, Glyphicon, Badge, Button } from 'react-bootstrap'
import {Container, FormContainer} from '../App/App.style'
import './Home.css'

export default class Home extends Component {

  render () {
    return (
      <div>
        <Container id='homepageContainer'>
          <Row className='flexRow'>
            <div id='profile_left'>
              <h1 className='hi'>Hi I'm Shirong</h1>
              <h2 id='WDIGrad'>WDI Graduate | Full-Stack Web Developer </h2>
              <ResumeDiv>
                <ResumeLink href='https://drive.google.com/file/d/0B4TSx5Jp3zdRNjZtTnRSREZqM2M/view?usp=sharing' target='_blank'>view my resume</ResumeLink>
              </ResumeDiv>
              <p>I enjoy using web technologies to make useful & pretty digital products that spark joy within people.</p>
              <br />
              <p>My personal quest to become technology literate in 2017 led me to enrol in General Assembly's Web Development Immersive bootcampt.  It has been such a humbling yet enriching experience, one that has made me truly appreciate what technology can do for us in this day and age.  I endeavour to continue exploring and creating better applications that can help make people's lives better, in any shape and form.</p>
              <br />
              <Row>
                <Col xs={3} md={1}>
                  <FaviconLink href='mailto:shirongfoo@gmail.com' target='_blank'><span className='fa fa-envelope fa-2x' /></FaviconLink>
                </Col>
                <Col xs={3} md={1}>
                  <FaviconLink href='https://www.linkedin.com/in/srfoo' target='_blank'><span className='fa fa-linkedin fa-2x' /></FaviconLink>
                </Col>
                <Col xs={3} md={1}>
                  <FaviconLink href='https://github.com/shirongfoo' target='_blank'><span className='fa fa-github fa-2x' /></FaviconLink>
                </Col>
                <Col xs={3} md={1}>
                  <FaviconLink href='https://twitter.com/cordyfoo' target='_blank'><span className='fa fa-twitter fa-2x' /></FaviconLink>
                </Col>
              </Row>
            </div>
            <div id='profile_right'>
              <ImageDiv className='imageDiv'>
              <img src='https://i.imgur.com/xcRtYSI.jpg' />
              </ImageDiv>
            </div>
          </Row>
        </Container>

        <FormContainer>
          <hr />
          <Row>
            <Col md={12}>
            <H2>Let's Keep In Touch</H2>
            </Col>
              <form action='https://formspree.io/shirongfoo@gmail.com' method='POST' >
                <Col md={12}>
                  <div className='form-group'>
                    <label>Name</label>
                    <input type='string' className='form-control' name='name' id='name' placeholder='Name' />
                  </div>
                </Col>
                <Col md={12}>

                <div className='form-group'>
                  <label>Email</label>
                  <input type='email' className='form-control' name='email' id='email' placeholder='Email' />
                </div>
              </Col>
              <Col md={12}>

                <div className='form-group'>
                  <label>Message</label>
                  <textarea type='text' className='form-control' name='message' id='message' placeholder='Leave a message' />
                </div>
              </Col>
              <Col md={12}>

                <input type='submit' className='btn btn-default' value='Send' />
              </Col>
              </form>

          </Row>
        </FormContainer>

      </div>

    )
  }
}
