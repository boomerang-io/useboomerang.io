import styled from 'styled-components'

export const Wrapper = styled.section`
  //background-image: url('../illustrations/details.svg');
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`

export const SkillsWrapper = styled.div`
  align-items: center;
  border-bottom: 0.0625rem solid #c1c7cd;
  display: flex;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  padding: 4rem 0;
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
    margin-bottom: 0.5rem;
    font-size: 26pt;
    font-weight: 500;
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
    margin-left: 1.5rem;
    margin-bottom: 2rem;
    list-style: initial;
  }

  li {
    font-size: 14pt;
    font-weight: 300;
    line-height: 1.3;
  }

  a {
    font-size: 1rem;
  }
`

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`

export const ButtonLinkSection = styled.section`
  display: flex;
  align-items: center;
  * + * {
    margin-left: 1rem;
  }
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
  transition: all 0.3s ease;
  &:active,
  &:hover,
  &:focus {
    background: #0058a1;
    transform: scale(1.02);
  }
`
