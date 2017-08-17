import React from 'react'
import './Connect.css'
import '../../vendor/css/ionicons.css'

const Connect = (props) => (
  <div className='connect'>
    <div className='connectDiv'>
      <h1>LET'S KEEP IN TOUCH!</h1>
      <form action='https://formspree.io/shirongfoo@gmail.com' method='POST' className='form'>
        <input type='string' name='name' id='name' placeholder='Name' />

        <input type='email' name='email' id='email' placeholder='Email' />

        <textarea type='text' name='message' id='message' placeholder='Leave a message' />

        <input type='submit' className='submitButton' value='Send'></input>

      </form>
    </div>
    <div className='closeConnectModal'>
      <span onClick={() => props.handleDisplay('backdrop')} className='ion-ios-close-empty' />
    </div>
  </div>
)

export default Connect
