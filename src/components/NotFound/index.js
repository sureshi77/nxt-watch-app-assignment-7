import {NotFoundContainer, Heading, Desc, Image} from './styledComponents'

import CartContext from '../../context/CartContext'

const NotFound = () => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const isDarkHeading = isDarkTheme ? 'white' : '#000'

      const isDarkDesc = isDarkTheme ? 'white' : '#000'

      const isDarkContainer = isDarkTheme ? '#000' : 'white'

      return (
        <>
          <NotFoundContainer isDark={isDarkContainer}>
            <Image src={imageUrl} alt="not-found" />
            <Heading isDark={isDarkHeading} isDarkTheme>
              Page Not Found
            </Heading>
            <Desc isDark={isDarkDesc}>
              We are sorry, the page you requested could not be found.
            </Desc>
          </NotFoundContainer>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default NotFound
