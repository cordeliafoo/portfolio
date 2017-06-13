import React, {Component, PropTypes} from 'react'
import {Container, FormContainer} from '../App/App.style'
import {Grid, Row, Col, Thumbnail, Glyphicon, Badge, Button, Modal, Popover, Tooltip, OverlayTrigger} from 'react-bootstrap'
import {H1, H2, SkillsContainer, ScrollDiv} from './Skills.style'

export default class Skills extends Component {

  render () {
    return (
    <div>

        <SkillsContainer>
          <Grid>
            <Row>
              <Col xs={12} md={12}>
                <H1>My Tech Skills</H1>
              </Col>
            </Row>
            <hr />

            <Row>
              <Col xs={12} md={12}>

                <H2><span className='fa fa-chevron-right icon-resize-small' style={{margin: '5px', color: 'grey'}} />Languages</H2>
                <p>Javascript, jQuery, HTML, CSS, Ruby</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <H2><span className='fa fa-chevron-right icon-resize-small' style={{margin: '5px', color: 'grey'}} />Environments</H2>
                <p >NodeJS, Rails</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <H2><span className='fa fa-chevron-right icon-resize-small' style={{margin: '5px', color: 'grey'}} />Databases</H2>
                <p>MongoDB, Postgresql</p>
              </Col>
            </Row>
            <Row>
              {/* <Col xs={6} xsOffset={6}> */}
              <Col xs={12} md={12}>
                <H2><span className='fa fa-chevron-right' style={{margin: '5px', color: 'grey'}} />Front-End Frameworks</H2>
                <p >ReactJS, Bootstrap, Materialize</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <H2><span className='fa fa-chevron-right icon-resize-small' style={{margin: '5px', color: 'grey'}} />Others</H2>
                <p>Git + Github, Chrome Development Tools, Heroku Website Deployment, Wireframming, Adobe Illustrator</p>
              </Col>
            </Row>
          </Grid>
        </SkillsContainer>
      <FormContainer>
        <hr />
        <Row>
            <Col xs={12} md={12}>
              <H2>Let's Keep In Touch</H2>
            </Col>
          <form action='https://formspree.io/shirongfoo@gmail.com' method='POST' >
          <Col xs={12} md={12}>
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
