import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  cursor: pointer;
  margin: 25px;
  border-bottom: 1px solid #000000;
  padding-bottom: 10px;
`
export const ThumbnailImage = styled.img`
  width: 50%;
  height: 250px;
  align-items: center;
`
export const VideoCarBottomContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const VideoCardBottomContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`
export const VideoDetailsText = styled.p`
  color: ${props => props.textColor};
  text-decoration: none;
  margin-bottom: 10px;
`

export const NavLink = styled(Link)`
  color: ${props => props.textColor};
  text-decoration: none;
  margin-bottom: 10px;
`
