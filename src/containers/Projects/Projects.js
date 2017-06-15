import React, { Component } from 'react'
import {ProjectContainer, ScrollDiv, H1ProjectsTitle, H2} from './Projects.style'
import {Row, Col} from 'react-bootstrap'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import Project4 from './Project4'
import Project5 from './Project5'
import Project6 from './Project6'
import './Projects.css'







class Projects extends Component {
  render () {
    return (
      <div>
        <ProjectContainer>
          <Row>
            <Col xs={12} md={12}>
              <H1ProjectsTitle>Projects</H1ProjectsTitle>
            </Col>

          </Row>
          <hr />

          <ScrollDiv>
            <Row>
              <Col xs={12} md={12}>
                <Project1 id='project1'/>
              </Col>
              <Col xs={12} md={12}>
                <Project2 />
              </Col>
              <Col xs={12} md={12}>
                <Project3 />
              </Col>
              <Col xs={12} md={12}>
                <Project4 />
              </Col>
              <Col xs={12} md={12}>
                <Project5 />
              </Col>
              <Col xs={12} md={12}>
                <Project6 />
              </Col>
            </Row>
          </ScrollDiv>
          <Row id='formContainer'>
            {/* <Col xs={12} md={4}>
              <div>HELLOOOO</div>
            </Col> */}
            <hr />
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
            <Col xs={12} md={12}>

              <div className='form-group'>
                <label>Email</label>
                <input type='email' className='form-control' name='email' id='email' placeholder='Email' />
              </div>
            </Col>
            <Col xs={12} md={12}>

              <div className='form-group'>
                <label>Message</label>
                <textarea type='text' className='form-control' name='message' id='message' placeholder='Leave a message' />
              </div>
            </Col>
            <Col xs={12} md={12}>

              <input type='submit' className='btn btn-default' value='Send' />
            </Col>
          </form>
          </Row>

        </ProjectContainer>


          {/* <FormContainer id='formContainer'>
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
              <Col xs={12} md={12}>

                <div className='form-group'>
                  <label>Email</label>
                  <input type='email' className='form-control' name='email' id='email' placeholder='Email' />
                </div>
              </Col>
              <Col xs={12} md={12}>

                <div className='form-group'>
                  <label>Message</label>
                  <textarea type='text' className='form-control' name='message' id='message' placeholder='Leave a message' />
                </div>
              </Col>
              <Col xs={12} md={12}>

                <input type='submit' className='btn btn-default' value='Send' />
              </Col>
            </form>

          </Row>
        </FormContainer> */}


      </div>
    )
  }
}

// class Projects extends Component {
//   render () {
//     return (
//       <ProjectContainer>
//         {/* <Zoomy
//           imageUrl={require('../../assets/hero.gif')}
//           renderThumbnail={
//             ({ showImage }) =>
//               <ImageButton onClick={showImage}>
//                 <img src={require('../../assets/heroThumbnail.gif')} alt='hero' />
//               </ImageButton>
//           }
//           scale={[1.1, 1.1]}
//           imageProps={{
//             style: {
//               width: '100vw',
//               height: 'auto'
//             }
//           }}
//         /> */}
//         <ScrollDiv>
//           <Row>
//             <Col xs={12} md={4}>
//               <Thumbnail src={require('../../assets/hero.gif')} alt='242x200'>
//                 <a href='https://shirongfoo.github.io/wdi-project-1-shirongfoo/' target='_blank'>
//                   <H1>fat fishy</H1>
//                   {/* <p>Description</p> */}
//                 </a>
//                 {/* <p>
//               <Button bsStyle='default'>Read More</Button>
//             </p> */}
//               </Thumbnail>
//             </Col>
//             <Col xs={12} md={4}>
//               <Thumbnail src={require('../../assets/hero.gif')} alt='242x200'>
//                 <a href='https://meetandjam.herokuapp.com' target='_blank'>
//                   <H1>meet & jam</H1>
//                   {/* <p>Description</p> */}
//                 </a>
//                 { /* <p>
//           <Button bsStyle='default'>Read More</Button>
//         </p> */ }
//               </Thumbnail>
//
//             </Col>
//             <Col xs={12} md={4}>
//               <Thumbnail src={require('../../assets/hero.gif')} alt='242x200'>
//                 <a href='https://whichcraft.herokuapp.com' target='_blank'>
//                   <H1>whichcraft</H1>
//                   <p>Description</p>
//                 </a>
//                 <p>
//                   <Button bsStyle='default'>Read More</Button>
//                 </p>
//               </Thumbnail>
//             </Col>
//             <Col xs={12} md={4}>
//               <Thumbnail src={require('../../assets/hero.gif')} alt='242x200'>
//                 <a href='https://shopppit.herokuapp.com' target='_blank'>
//                   <H1>shopppit</H1>
//                   <p>Description</p>
//                 </a>
//                 <p>
//                   <Button bsStyle='default'>Read More</Button>
//                 </p>
//               </Thumbnail>
//             </Col>
//             <Col xs={12} md={4}>
//               <Thumbnail src={require('../../assets/hero.gif')} alt='242x200'>
//                 <a href='https://rongfoo.com' target='_blank'>
//                   <H1>the 30 Day Project</H1>
//                   <p>Description</p>
//                 </a>
//                 <p>
//                   <Button bsStyle='default'>Read More</Button>
//                 </p>
//               </Thumbnail>
//             </Col>
//             <Col xs={12} md={4}>
//               <Thumbnail src={require('../../assets/hero.gif')} alt='242x200'>
//                 <a href='#' target='_blank'>
//                   <H1>spotify x react</H1>
//                   <p>Description</p>
//                 </a>
//                 <p>
//                   <Button bsStyle='default'>Read More</Button>
//                 </p>
//               </Thumbnail>
//             </Col>
//             <Col xs={12} md={4}>
//               <Thumbnail src={require('../../assets/hero.gif')} alt='242x200'>
//                 <a href='#' target='_blank'>
//                   <H1>web sockets x pictionary</H1>
//                   <p>Description</p>
//                 </a>
//                 <p>
//                   <Button bsStyle='default'>Read More</Button>
//                 </p>
//               </Thumbnail>
//             </Col>
//           </Row>
//
//         </ScrollDiv>
//
//       </ProjectContainer>
//     )
//   }
// }

export default Projects
