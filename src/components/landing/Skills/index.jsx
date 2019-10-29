import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container } from 'Common'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = ({
	listItems,
	title,
	paragraph,
	imgSrc,
	reverse,
	buttonText,
	buttonLink,
}) => (
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
				{buttonText && buttonLink && (
					<a
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							background: '#0072c3',
							color: 'white',
							padding: '0.375rem',
							borderRadius: '0.25rem',
							width: '8rem',
							height: '2rem',
							fontSize: '1rem',
							letterSpacing: '0.0125rem',
							margin: '0 auto',
						}}
						href={buttonLink}
					>
						{buttonText}
					</a>
				)}
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
