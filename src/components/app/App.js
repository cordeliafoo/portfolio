import React, {Component} from 'react'
import About from '../about/About'
import Skills from '../skills/Skills'
import Projects from '../projects/Projects'
import Connect from '../connect/Connect'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = ({
      display: 'backdrop',
      project: 0
    })

    this.handleDisplay = this.handleDisplay.bind(this)
    this.handleProject = this.handleProject.bind(this)
  }

  handleDisplay (section) {
    this.setState({
      display: section
    })
  }

  handleProject (projectNumber) {
    this.setState({
      project: projectNumber
    })
  }

  render () {
    return (
      <div className='App'>
        <div className='backdrop' onClick={() => this.handleDisplay('backdrop')}>
          <div className='bigHelloDiv'>
            <h1>hello!</h1>
          </div>
          <div className='blurBelowHellowDiv'>
            <p>thanks so much for stopping by!
            <br></br>feel free to browse through my projects.
            <br></br>If you find something you like, I'd love to hear from you!
          </p>

          </div>
        </div>

        <div className='navigationDiv'>
          <a className='aboutButton' onClick={() => this.handleDisplay('about')}>ABOUT</a>
          <a className='projectButton' onClick={() => this.handleDisplay('project')}>PROJECTS</a>
          <a className='skillsButton' onClick={() => this.handleDisplay('skills')}>SKILLS</a>
          <a className='connectButton' onClick={() => this.handleDisplay('connect')}>LET'S CONNECT</a>
        </div>

        <div className='divider'>< hr/> </div>


        <div className={'myModal ' + (this.state.display === 'about' ? 'modalActive' : 'modalInactive')} >
          <About handleDisplay={this.handleDisplay} />
        </div>

        <div className={'myModal ' + (this.state.display === 'project' ? 'modalActive' : 'modalInactive')} >
          <Projects handleDisplay={this.handleDisplay} handleProject={this.handleProject} project={this.state.project} />
        </div>

        <div className={'myModal ' + (this.state.display === 'skills' ? 'modalActive' : 'modalInactive')} >
          <Skills handleDisplay={this.handleDisplay} />
        </div>

        <div className={'myModal ' + (this.state.display === 'connect' ? 'modalActive' : 'modalInactive')} >
          <Connect handleDisplay={this.handleDisplay} />
        </div>

      </div> // end of rendered div
    ) // end of return
  } // end of render
}

export default App
