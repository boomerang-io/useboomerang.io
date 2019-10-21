import React from 'react'
import { Container } from 'Common'
// import boomerangIcon from 'Static/images/boomerang.png'
import BoomerangLogo from '../../../graphics/BoomerangLogo'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, Brand, Icon } from './styles'

const Navbar = () => (
	<Wrapper as={Container}>
		<Brand>
			<Icon>
				<BoomerangLogo style={{ height: '2.5rem' }} />
			</Icon>
		</Brand>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
