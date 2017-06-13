import React, {Component, PropTypes} from 'react'
import {Container} from '../App/App.style'
import ReactPDF from 'react-pdf'

export default class Resume extends Component {

  render () {
    return (
      <div>
        <ReactPDF
          file='https://ga-core.s3.amazonaws.com/cms/files/files/000/004/660/original/170601_GA_CodingResume.pdf?utm_medium=email&utm_source=transactional&utm_campaign=2017-Q2-coding-resume-confirmation&utm_content=marketing'
              />
      </div>
    )
  }
}
