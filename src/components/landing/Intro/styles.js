import styled from 'styled-components'

export const Wrapper = styled.header`
	margin-bottom: 4rem;
`

export const IntroWrapper = styled.div`
	padding: 4rem 0rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-image: url('../illustrations/sydney_skyline.svg');
	background-position: bottom right;
	background-repeat: no-repeat;
	background-size: 50%;

	@media (max-width: 960px) {
		flex-direction: column;
		padding: 4rem 0 8rem;
		background-size: 100%;
	}
`

export const Details = styled.div`
	width: 50%;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 36pt;
		font-weight: 600;
		color: #242a2e;

		@media (max-width: 680px) {
			font-size: 30pt;
		}
	}

	h4 {
		margin-bottom: 2.5rem;
		font-size: 24pt;
		font-weight: 300;
		color: #242a2e;

		@media (max-width: 680px) {
			font-size: 26pt;
		}
	}
`

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
	}

	img {
		width: 100%;
	}
`
