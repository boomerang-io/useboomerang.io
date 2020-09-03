import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container } from '../../common'
import {
  Wrapper,
  SkillsWrapper,
  Details,
  Thumbnail,
  ButtonLinkSection,
  ButtonLink,
} from './styles'

export const Skills = ({
  listItems,
  title,
  paragraph,
  imgAlt,
  imgSrc,
  reverse,
  linkButtons,
}) => (
  <Wrapper id={title}>
    <SkillsWrapper reverse={reverse} as={Container}>
      <Thumbnail>
        <img style={{ height: '20rem' }} src={imgSrc} alt={imgAlt} />
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
        {linkButtons && (
          <ButtonLinkSection>
            {linkButtons.map(item => (
              <ButtonLink href={item.link}>{item.text}</ButtonLink>
            ))}
          </ButtonLinkSection>
        )}
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
