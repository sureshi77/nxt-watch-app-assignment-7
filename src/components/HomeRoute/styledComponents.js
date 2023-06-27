import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: ${props => props.bgColor};
`

export const BannerImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => props.display};
  flex-direction: row;
  width: 80%;
  height: 40vh;
  padding: 50px;
`
export const BannerImage = styled.img`
  object-fit: fill;
  width: 250px;
`
export const GetItNowButton = styled.button`
  color: #181818;
  background-color: transparent;
  height: 30px;
  width: 100px;
  margin: 20px;
  border-color: #000;
  border-style: solid;
  text-align: center;
`
export const BannerText = styled.p`
  color: #181818;
  font-family: 'Roboto';
`

export const HomeStickyContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
`

export const HomeSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const CloseButton = styled.button`
  background-color: transparent;
  margin-left: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
