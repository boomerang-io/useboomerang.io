import React from 'react'
import { Container } from 'Common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>Boomerang, a collection of IBM open source projects</h2>
				<span>
					© All rights are reserved | {new Date().getFullYear()} | Made with{' '}
					<span aria-label="robot" role="img">
						🤖
					</span>{' '}
					by{' '}
					<a
						href="https://developer.ibm.com/open/"
						rel="noopener noreferrer"
						target="_blank"
					>
						IBM open source
					</a>
				</span>
			</Details>
			<Links>
				{social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${name}`}
					>
						<img width="24" src={icon} alt={name} />
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
)
