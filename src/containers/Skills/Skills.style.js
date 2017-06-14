import styled from 'styled-components'
import { FlexBox, Div } from '../../theme/grid'
import {Link} from 'react-router'

export const H1 = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 2.2em;
  font-weight: 700;
  margin-right: 3%;
  margin-right: 1%;

`

export const H2 = styled.h2`
  font-family: 'Lato', sans-serif;
  font-size: 1.7em;
`



export const SkillsContainer = styled.div`
  ${''/* position: fixed;
  left: 20vw;
  right: 20vw;
  width: 60vw;
  top: 10vh;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center; */}
${''/* background-color: green; */}
  width: 70%;
  height: 107vh;
  margin: 0 auto;
  margin-top: 30px;

  ${''/* overflow: scroll; */}
  overflow: visible;


`

export const ScrollDiv = styled.div`
 width: 100%;
 height: 99%;
 overflow-x: hidden;
 overflow-y: scroll;
::-webkit-scrollbar {
display: none;
}
`
