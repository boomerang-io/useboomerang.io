import React from 'react'
import Link from "@boomerang-io/gatsby-theme-boomerang/src/components/Link"
import { Button } from "@boomerang-io/carbon-addons-boomerang-react"
import { Container } from '../../common'
import {
  Wrapper,
  SkillsWrapper,
  Details,
  Thumbnail,
  ButtonLinkSection,
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
              <Link to={item.link}><Button size="field" renderIcon={item.renderIcon}>{item.text}</Button></Link>
            ))}
          </ButtonLinkSection>
        )}
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
