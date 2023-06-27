import styled from 'styled-components'
import {Link} from 'react-loader-spinner'

export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  list-style-type: none;
  cursor: pointer;
  margin: 25px;
  border-bottom: 1px solid #000000;
  padding-bottom: 10px;
  height: 400px;
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: fill;
`

export const VideoCardBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  width: 40px;
  margin-left: 25px;
`

export const VideoDetailsText = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
`

export const NavLink = styled(Link)`
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 10px;
`
