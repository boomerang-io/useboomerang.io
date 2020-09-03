import React from 'react'
import { Container } from '../../../common'
// import boomerangIcon from 'Static/images/boomerang.png'
import BoomerangLogo from '../../../graphics/BoomerangLogo'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, Brand, Icon } from './styles'

const Navbar = () => (
  <Wrapper as={Container}>
    <Brand>
      <Icon>
        <BoomerangLogo style={{ height: '2rem' }} />
      </Icon>
    </Brand>
    <NavbarLinks desktop />
  </Wrapper>
)

export default Navbar
