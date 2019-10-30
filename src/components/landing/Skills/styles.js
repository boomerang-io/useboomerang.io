import styled from 'styled-components'

export const Wrapper = styled.section`
	//background-image: url('../illustrations/details.svg');
	background-size: contain;
	background-position: left top;
	background-repeat: no-repeat;
`

export const SkillsWrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Details = styled.section`
	flex: 1;

	@media (max-width: 960px) {
		padding-left: unset;
		width: 100%;
	}

	h1 {
		margin-bottom: 1rem;
		font-size: 26pt;
		color: #212121;
	}

	p {
		margin-bottom: 2rem;
		font-size: 14pt;
		font-weight: 300;
		line-height: 1.1;
		color: #212121;
	}

	ul {
		margin-bottom: 2rem;
	}

	li {
		font-size: 14pt;
		font-weight: 300;
		line-height: 1.1;
	}
`

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}
`

export const ButtonLinkSection = styled.div`
	display: flex;
	align-items: center;
`

export const ButtonLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #0072c3;
	color: white;
	padding: 0.375rem;
	border-radius: 0.25rem;
	width: 8rem;
	height: 2rem;
	font-size: 1rem;
	letter-spacing: 0.0125rem;
	margin-right: 1rem;
	&:hover {
		background: #0058a1;
	}
`
