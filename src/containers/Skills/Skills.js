import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {H1, H2, SkillsContainer} from './Skills.style'
import './Skills.css'

export default class Skills extends Component {

  render () {
    return (
    <div>

        <SkillsContainer id='skillsContainer'>
          <Grid>
            <Row>
              <Col xs={12} md={12}>
                <H1>My Tech Skills</H1>
              </Col>
            </Row>

            <hr />
            <Row>
              <Col xs={12} md={12}>

                <H2 className='H2iphone'><span className='fa fa-chevron-right icon-resize-small' style={{margin: '5px', color: 'grey'}} />Languages</H2>
                <p className='piphone'>Javascript, jQuery, HTML, CSS, Ruby</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <H2 className='H2iphone'><span className='fa fa-chevron-right icon-resize-small' style={{margin: '5px', color: 'grey'}} />Environments</H2>
                <p >NodeJS, Rails</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <H2 className='H2iphone'><span className='fa fa-chevron-right icon-resize-small' style={{margin: '5px', color: 'grey'}} />Databases</H2>
                <p className='piphone'>MongoDB, Postgresql</p>
              </Col>
            </Row>
            <Row>
              {/* <Col xs={6} xsOffset={6}> */}
              <Col xs={12} md={12}>
                <H2 className='H2iphone'><span className='fa fa-chevron-right' style={{margin: '5px', color: 'grey'}} />Front-End Frameworks</H2>
                <p className='piphone'>ReactJS, Bootstrap, Materialize</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <H2 className='H2iphone'><span className='fa fa-chevron-right icon-resize-small' style={{margin: '5px', color: 'grey', wordWrap: 'break-word'}} />Others</H2>
                <p className='piphone'>Git + Github, Chrome Development Tools, Heroku Website Deployment, Wireframming, Adobe Illustrator</p>
              </Col>
            </Row>
          </Grid>
        </SkillsContainer>

  </div>
    )
  }
}
