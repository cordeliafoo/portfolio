import styled, {css} from 'styled-components'
// import media from 'theme/media'

export const Relative = styled.div`
  position: relative;
`
export const FlexBox = styled.div`
  ${''/* background-color: red; */}
  display: flex;

  ${({ justify}) => justify && css`
    justify-content: ${justify};
  `}

  ${({ align}) => align && css`
    align-content: ${align};
  `}

  ${({ column}) => column && css`
    flex-direction: column;
  `}
`

export const Div = styled.div`
  margin: 0 auto;
`
