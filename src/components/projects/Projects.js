import React from 'react'
import './Projects.css'
import '../../vendor/css/ionicons.css'



const text =
  [
    ['I decided to recreate a childhood favorite game of mine.  To challenge myself further, I decided to develop the game entirely using Object Oriented Programming(OOP) to cement and apply the concepts I learnt in my first two weeks of class. The process was painful but ultimately worthwhile because it made my code more modular and manageable.',
      'Using keyboard controls, players navigate around the fish tank to consume smaller fish and avoid the biger ones. Players morph into bigger-sized fish when they have eaten enough fishys.'],
    ['meet and jam is my first web application which utilizes a back-end persistent database.  The app aims to connect fellow musicians by providing a platform for them to create jamming events, as well as an opportunity for them to share audio samples of their music with other users.',
      'By building this application, I became familiar with Create, Read, Update and Destroy(CRUD) functionalities that form the basis of all web applications; utilizing proper HTML verbs to make my routes RESTful (i.e. GET, POST, PUT, DELETE); and consuming external APIs such as Cloudinary(for hosting images) and Google Maps Geocoding'],
    ['This was my first project using Ruby on Rails!  I also levelled up on my git version control skills because this was a group project which required us to manage the pulling and merging of different branches/features each of us were working on.',
      'Whichcraft is a UX-focused app that seeks to bring bespoke crafts and services to the larger community, and allow for craftsmen to advertise and share their skills and expertise.  We threw in a couple of APIs including Stripe-connect(to handle the payment infrastructure required for a marketplace-based app like ours), and Cloudinary for image and video hosting.'],
    ['Shopppit (with three Ps (!!) because shopit and shoppit were already taken) is my 4th and final project as a Web Development Immersive student at General Assembly Singapore.  This app pays homage to a vice that surfaces whenever I\'m stressed (which happened a lot throughout my time at WDI) - online shopping.',
      'I wanted to walk myself through the steps of actually building an ecommerce website from both the user\'s and admin/business owner\'s perspective.  This process also helped myself to consolidate and solidify front-end and back-end skills that I have picked up over the last three months.'],
    ['I\'m especially proud of this collection of microsites because it was created as a personal project in an attempt to overcome my phobia of coding and get my feet wet in the world of web development.  The 30DayProject is my personal spin on the #The100DayProject, where I build one small little website a day for 30 days.',
      'Thes sites are purely experimental and educational, their silliness brought a smile to my face and I hope they have the same effect on you.  I even managed to consume a few APIs, including a weather and a word-synonym one. Throughout this process, I celebrated the little victories, learned the art of troubleshooting, made friends with stack overflow, and gained a smidgen of confidence, and basically had a blast.  Technology does not seem so scary after all!'],
    ['It\'s web-ception time!  My last and final assignment for the WDI course involved me building a website to house all the projects that I completed over the past 12 weeks.',
      'I decided to trying creating a react application since I had never tried using this front-end framework before.  It was a refreshing exprerience to navigate around my site wihout seeing the browser refresh (yes I am aware of this horrible pun!).  Consolidating my achievements over the past couple weeks was indeed a satisfying process and I enjoyed making this simple but (hopefully) effective portfolio site.']
  ]

const repos =
  [
    'https://github.com/shirongfoo/wdi-project-1-shirongfoo',
    'https://github.com/shirongfoo/project2',
    'https://github.com/wdi-sg/wdi-project-3-the-dream-team',
    'https://github.com/shirongfoo/wdi-project-4',
    '#',
    'https://github.com/shirongfoo/portfolio'
  ]

const sites =
  [
    'https://shirongfoo.github.io/wdi-project-1-shirongfoo/',
    'https://meetandjam.herokuapp.com',
    'https://whichcraft.herokuapp.com/',
    'https://shopppit.herokuapp.com',
    'https://rongfoo.com',
    'https://shirongfoo.me'
  ]

const images =
  [ 'https://media.giphy.com/media/3o7btTSUFltPTzCRby/giphy.gif',
    'https://i.imgur.com/OSfOTMN.gif',
    'https://i.imgur.com/KenoeOd.gif',
    'https://i.imgur.com/085xC6U.gif',
    'https://i.imgur.com/zLWnhA2.gif',
    'https://i.imgur.com/rVXCSAW.gif'
  ]

class Projects extends React.Component {
  constructor (props) {
    super(props)
    this.state = ({
      project: props.project
    })
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      project: nextProps.project
    })
  }

  render () {
    return (
      <div className='projects'>
        <div className='closeProjectsModal'>
          <span onClick={() => this.props.handleDisplay('backdrop')} className='ion-ios-close-empty' />
        </div>

        <ul>
          <li className='projectOption' onClick={() => this.props.handleProject(0)}>
            <div className={'projectNavBar ' + (this.state.project === 0 ? 'projectTabActive' : 'projectTabInactive')}>fat fishy</div>
          </li>
          <li className='projectOption' onClick={() => this.props.handleProject(1)}>

            <div className={'projectNavBar ' + (this.state.project === 1 ? 'projectTabActive' : 'projectTabInactive')}>meet & jam</div>
          </li>
          <li className='projectOption' onClick={() => this.props.handleProject(2)}>

            <div className={'projectNavBar ' + (this.state.project === 2 ? 'projectTabActive' : 'projectTabInactive')}>whichcraft</div>
          </li>
          <li className='projectOption' onClick={() => this.props.handleProject(3)}>

            <div className={'projectNavBar ' + (this.state.project === 3 ? 'projectTabActive' : 'projectTabInactive')}>shopppit</div>
          </li>
          <li className='projectOption' onClick={() => this.props.handleProject(4)}>
            <div className={'projectNavBar ' + (this.state.project === 4 ? 'projectTabActive' : 'projectTabInactive')}>the 30 day project</div>
          </li>
          <li className='projectOption' onClick={() => this.props.handleProject(5)}>
            <div className={'projectNavBar ' + (this.state.project === 5 ? 'projectTabActive' : 'projectTabInactive')}>portfolio</div>
          </li>
        </ul>

        <div className='mainDivForProjects'>
          {/* <div className='projectImageDiv' style={{backgroundImage: `url(${images[this.state.project]})`}} /> */}
          <div className='projectImageDiv'>
            <img className='projectImage' src={images[this.state.project]} alt='projectImage'></img>
          </div>
          <div className='projectWriteupAndLinksDiv'>
            <div className='projectWriteupDiv'>
              <div className='whatWhyHowDiv'>
                <h5>WHAT, WHY AND HOW?</h5>
              </div>
              <p>
                <span>{text[this.state.project][0]}</span>
                <span>{text[this.state.project][1]}</span>
              </p>
              <hr />
            </div>
            <div className='projectLinksDiv'>
              <div className='stillInterestedDiv'>
                <h5>STILL INTERESTED?</h5>
              </div>
              <div className='iconAndLabelDiv'>
                <a href={repos[this.state.project]} target='_blank' rel='noopener noreferrer' className='githubLink'>
                  <span className='fa fa-github fa-2x' />
                </a>
                <p className='iconLabel'> github repo </p>
                <a href={sites[this.state.project]} target='_blank' rel='noopener noreferrer' className='siteLink'>
                  <span className='fa fa-globe fa-2x' />
                </a>
                <p className='iconLabel'> view the site </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

} // end of Component

export default Projects
