import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import boomerangIcon from 'Static/images/boomerang.png'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, Brand, Icon } from './styles'

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">
			<Brand>
				<Icon src={boomerangIcon} alt="Boomerang Icon" />
				Boomerang
			</Brand>
		</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
