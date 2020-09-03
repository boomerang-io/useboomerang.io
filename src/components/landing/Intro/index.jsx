import React from 'react'
import { Header } from '../../theme'
import { Container } from '../../common'

import { Wrapper, IntroWrapper, Details } from './styles'

export const Intro = () => (
	<Wrapper>
		<IntroWrapper as={Container}>
			<Details>
				<h1>Boomerang</h1>
				<h4>Open source, cloud-native projects for CI/CD and automation</h4>
			</Details>
		</IntroWrapper>
	</Wrapper>
)
