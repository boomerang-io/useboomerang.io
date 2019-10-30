import React from 'react'
import { Header } from 'Theme'
import { Container } from 'Common'

import { Wrapper, IntroWrapper, Details } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Boomerang</h1>
				<h4>Open source, cloud-native projects for CI/CD and automation</h4>
			</Details>
		</IntroWrapper>
	</Wrapper>
)
