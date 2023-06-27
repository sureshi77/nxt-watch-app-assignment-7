import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  list-style-type: none;
  cursor: pointer;
  margin: 25px;
  background-color: ${props => props.bgColor};
`
export const ThumbnailImage = styled.img`
  width: 50%;
`
export const VideoCarBottomContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  align_item: center;
`

export const VideoDetailsText = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.color};
`

export const NavLink = styled(Link)`
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 10px;
`
