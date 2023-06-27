import CartContext from '../../context/CartContext'

import {
  VideoCardContainer,
  ThumbnailImage,
  VideoCarBottomContainer,
  VideoDetailsContainer,
  VideoDetailsText,
  NavLink,
} from './styledComponents'

const VideoCardTwo = props => {
  const {details} = props
  const {title, id, thumbnailUrl, viewCount, channel, publishedAt} = details
  const {name} = channel

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

        const textColor = isDarkTheme ? '#f9f9f9' : '#101010'

        return (
          <NavLink to={`videos/${id}`} color={bgColor}>
            <VideoCardContainer>
              <ThumbnailImage src={thumbnailUrl} alt="videos thumbnail" />
              <VideoCarBottomContainer>
                <VideoDetailsContainer>
                  <VideoDetailsText textColor={textColor} size={20}>
                    {title}
                  </VideoDetailsText>
                  <VideoDetailsText>{name}</VideoDetailsText>
                  <VideoDetailsText textColor={textColor} size={15}>
                    {viewCount} views
                  </VideoDetailsText>
                  <VideoDetailsText>{publishedAt}</VideoDetailsText>
                </VideoDetailsContainer>
              </VideoCarBottomContainer>
            </VideoCardContainer>
          </NavLink>
        )
      }}
    </CartContext.Consumer>
  )
}

export default VideoCardTwo
