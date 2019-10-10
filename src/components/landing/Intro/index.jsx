import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import comingSoon from 'Static/illustrations/coming-soon.svg'

import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Boomerang</h1>
				<h4>Coming Soon!</h4>
				{/* <Button as={AnchorLink} href="#contact">
					Hire me
				</Button> */}
			</Details>
			<Thumbnail>
				<img src={comingSoon} alt="Coming soon!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
