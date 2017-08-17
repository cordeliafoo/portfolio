import React from 'react'
import './About.css'
import '../../vendor/css/ionicons.css'

const About = (props) => (
  <div className='about'>
    <div className='closeAboutModal'>
      <span onClick={() => props.handleDisplay('backdrop')} className='ion-ios-close-empty' />
    </div>
    <div className='profilePicAndIntroDiv'>
      <span className='myProfilePicSpan'>
        <img className='myProfilePic' src='http://i.imgur.com/pRmFlNs.jpg?1' alt='Profile Pic' />
      </span>
      <div className='blurb'>
        <h2>Hi I'm Shirong</h2>
        <div className='resumeAndGALinkDiv'>
          <a className='resumeLink' href='https://drive.google.com/file/d/0B4TSx5Jp3zdRNjZtTnRSREZqM2M/view?usp=sharing' target='_blank' rel='noopener noreferrer'>view my resume</a>
        </div>

        <span>I am an <b>avid tech, arts, and people lover</b> who enjoys making <b>useful & pretty digital products</b> that spark joy within people.</span>
        <span>My personal quest to become technology literate in 2017 led me to enrol in <b>General Assembly's Web Development Immersive bootcamp </b>
          <a className='GAProfileLink' href='https://profiles.generalassemb.ly/shirongfoo' target='_blank' rel='noopener noreferrer'>(view my General Assembly profile here).</a>

        </span>
        <span>It has been such a humbling yet enriching experience, one that has made me truly appreciate what technology can do for us in this day and age.
            To me, coding is a <b>powerful way to communicate</b> with people when language alone is inadequate.</span>
        <span>I endeavour to continue exploring and creating better applications that can <b>help make people's lives better</b>, in any shape and form.</span>
        <div className='links'>
          <a href='https://www.linkedin.com/in/srfoo' target='_blank' rel="noopener noreferrer"><span className='fa fa-linkedin fa-2x' /></a>
          <a href='mailto:shirongfoo@gmail.com' target='_blank' rel="noopener noreferrer"><span className='fa fa-envelope fa-2x' /></a>
          <a href='https://github.com/shirongfoo' target='_blank' rel="noopener noreferrer"><span className='fa fa-github fa-2x' /></a>

        </div>
      </div>
    </div>

  </div>
)

export default About
