import styled from 'styled-components'

export const Wrapper = styled.footer`
	padding: 10rem 0 4rem 0;
	background: white;
	//background-image: url('../illustrations/footer.svg');
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;

	@media (max-width: 1960px) {
		padding: 10rem 0 4rem;
	}
`

export const Flex = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;

	@media (max-width: 680px) {
		flex-direction: column;
		text-align: center;
		align-items: center;
	}
`

export const Links = styled.div`
	display: flex;
	align-items: center;

	a {
		margin: 0 0.625rem;

		img {
			margin: 0;
		}

		&:first-child {
			margin-left: 0;
		}
		&:last-child {
			margin-right: 0;
		}
	}
`

export const Details = styled.div`
	color: #242a2e;
	h2 {
		font-weight: 600;
	}
	@media (max-width: 680px) {
		margin-bottom: 2rem;
	}
`
