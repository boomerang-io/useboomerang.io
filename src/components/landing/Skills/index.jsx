import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container } from 'Common'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = ({ listItems, title, paragraph, imgSrc, reverse }) => (
	<Wrapper id={title}>
		<SkillsWrapper reverse={reverse} as={Container}>
			<Thumbnail>
				<img style={{ height: '20rem' }} src={imgSrc} alt="" />
			</Thumbnail>
			<Details reverse={reverse}>
				<h1>{title}</h1>
				<p>{paragraph}</p>
				{Array.isArray(listItems) && (
					<ul>
						{listItems.map(item => (
							<li>{item}</li>
						))}
					</ul>
				)}
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
