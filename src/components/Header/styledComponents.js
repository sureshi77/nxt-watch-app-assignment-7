import styled from 'styled-components'

export const NavHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  padding-left: 30px;
  padding-right: 30px;
  position: sticky;
  scroll-behavior: smooth;
  height: 50px;
  background-color: ${props => props.bgColor}
}  
@media screen and (mia-width: 768px){
    flex-direction:row;
}
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  margin-left: 10px;
`

export const ContentContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`
export const LogoutButton = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  padding: 8px 16px;
  color: #fff;
  background-color: #0967d2;
  border: none;
  border-radius: 4px;
  margin-left: 14px;
  cursor: pointer;
  outline: none;
`

export const ContentListItem = styled.li`
  display: flex;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px none;
  cursor: pointer;
  color: ${props => props.color};
`

export const WebsiteLogo = styled.img`
  width: 110px;

  @media screen and {
    width: 165px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 200px;
  width: 400px;
  background-color: #cbd5e1;
  border-radius: 10px;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 13px;
  padding-right: 20px;
  padding-left: 20px;
  color: #616e7c;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
`
export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
`

export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: #fff;
  padding: 15px;
  padding-right: 20px;
  padding-left: 20px;
  border: none;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  color: #0f0f0f;
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  margin: 10px;
  color: #000;
`
