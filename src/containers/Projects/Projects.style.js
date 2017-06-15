import styled from 'styled-components'

export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;

  & > img {
    transition: transform .3s;
  }

  &:hover{
    & > img {
      transform: scale(1.3);
    }
  }
`
export const H1ProjectsTitle = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 2.2em;
  font-weight: 700;
`

export const H1 = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 1.8em;
`

export const H4 = styled.h4`
  font-family: 'Lato', sans-serif;
  font-size: 1.5em;
`

export const P = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2em;
`


export const ProjectContainer = styled.div`
  width: 70%;
  height: 100vh;
  margin: 0 auto;
  margin-top: 30px;
  ${''/* overflow: scroll; */}
  ${''/* overflow: hidden; */}
  ${''/* background-color: red; */}
  padding-bottom: 10px;

  @media screen and (orientation: portrait) {
    width: 95%;
  }


  
`
export const ScrollDiv = styled.div`
 width: 100%;
 height: 100vh;
 ${''/* overflow-x: hidden;
 overflow-y: scroll;
::-webkit-scrollbar {
display: none;
} */}
`

export const ProjectCard = styled.div`
  cursor: pointer;
  height: 300px;
  ${''/* background-color: red; */}
`

export const FaviconLink = styled.a`
  color: grey;
`

export const ModalIcons = styled.span`
  margin-right: 5%;
`

export const H2 = styled.h2`
  font-family: 'Lato', sans-serif;
  font-size: 1.9em;
  margin-bottom: 1%;
`
