import styled from 'styled-components'
import { FlexBox, Div } from '../../theme/grid'
import {Link} from 'react-router'

export const NavigationContainer = styled.div`
  ${''/* position: fixed; */}
  top: 1em;
  width: 100%;
  /*white-space: nowrap;*/
  height: 10vh;
  display: flex;
  margin-top: 1%;
  align-items: right;
  justify-content: flex-end;
  ${''/* background-color: red; */}
`

export const NavItem = styled(Link)`
  padding: 2%;
  font-family: 'Lato', sans-serif;
  font-size: 1.4em;
  cursor: pointer;
  position: relative;
  color: black;
  &>span {
    transition: font-size .5s ease;
  }
  &>span:hover{
    font-size: 1.4em;
  }
`
