import React from 'react'
import './Skills.css'
import '../../vendor/css/ionicons.css'
import './font-mfizz/font-mfizz.css'

const Skills = (props) => (
  <div className='skills'>
                <div className='iconDiv'>
                  <i className='ion-social-javascript icon' />
                  <span>Javascript</span>
                </div>
                <div className='iconDiv'>
                  <i className='icon-ruby icon' />
                  <span>Ruby</span>
                </div>
                <div className='iconDiv'>
                  <i className='icon-html5 icon' />
                  <span>HTML</span>
                </div>
                <div className='iconDiv'>
                  <i className='icon-css3 icon' />
                  <span>CSS</span>
                </div>
              <div className='iconDiv'>
                <i className='icon-nodejs icon' />
                <span>NodeJS</span>
              </div>
              <div className='iconDiv'>
                <i className='icon-ruby-on-rails-alt icon' />
                <span>Rails</span>
              </div>
              <div className='iconDiv'>
                <i className='icon-reactjs icon' />
                <span>ReactJS</span>
              </div>
              <div className='iconDiv'>
                <i className='icon-database icon' />
                <span>MongoDB</span>
              </div>
              <div className='iconDiv'>
                <i className='icon-postgres-alt icon' />
                <span>PostgreSQL</span>
              </div>
              <div className='iconDiv'>
                <i className='icon-heroku icon' />
                <span>Heroku</span>
              </div>

    {/* <div className='eachSkillDiv'><p>languages</p></div>
    <div className='eachSkillDiv'><p>environments</p></div>
    <div className='eachSkillDiv'><p>databases</p></div>
    <div className='eachSkillDiv'><p>front-end</p></div>
    <div className='eachSkillDiv'><p>others</p></div> */}
    {/* <ul>
      <div className='languagesDiv'>
      </div>
      <li className='eachSkillItem'>environments</li>
      <li className='eachSkillItem'>databases</li>
      <li className='eachSkillItem'>front-end</li>
      <li className='eachSkillItem'>others</li>
    </ul> */}
    <div className='closeSkillsModal'>
      <span onClick={() => props.handleDisplay('backdrop')} className='ion-ios-close-empty' />
    </div>
  </div>
)

export default Skills
