import styled from 'styled-components'
import profilePic from '../../assets/profilePic.png'

export const LandingDiv = styled.div`
  text-align: left;
  color: black;
  ${''/* vertical-align: middle; */}
  ${''/* display; relative; */}
`

export const ImageDiv = styled.div`
  display: inline-block;
  position: absolute;
  background-size: cover;
  object-fit: cover;
  ${''/* overflow: hidden; */}
`

export const RevealP = styled.p`
  position: relative;
`
export const H1 = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 2.5em;
  margin-bottom: 20px;
`

export const H2 = styled.h2`
  font-family: 'Lato', sans-serif;
  font-size: 1.9em;
  margin-bottom: 15px;
`


export const FaviconLink = styled.a`
  color: grey;
`

export const FormDiv = styled.div`
  position: absolute;
  top: 100vh;
  left: 20vh;
`

export const MainDiv = styled.div`
  position: relative;
`

export const ResumeLink = styled.a`
  font-family: 'Open Sans', sans-serif;
  bottom: 5%;
  text-decoration: underline;
  cursor: pointer;
`


export const ResumeDiv = styled.div`
  margin-bottom: 5%;

`
