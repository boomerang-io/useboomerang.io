import React from 'react'
import SectionTransition from '../SectionTransition'
import Link from "@boomerang-io/gatsby-theme-boomerang/src/components/Link"
import { Button } from "@boomerang-io/carbon-addons-boomerang-react"
import FlowLogo from '../../graphics/FlowLogo'
import ArrowRight16 from '@carbon/icons-react/es/arrow--right/16'
import * as styles from './Intro.module.scss'

export const Intro = () => {
  return (
    <div className={styles.container}>
      <SectionTransition />
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <div className={styles.flow}>
            <FlowLogo className={styles.flowLogo}/>
            <p className={styles.flowText}>Boomerang Flow</p>
          </div>
          <p className={styles.flowTitle}>
            Cloud-native orchestration tool for workflow automation
          </p>
          <p className={styles.flowDescription}>
            A new scalable and extensible modern approach to automation focused on
            the end user experience with lower cost and increased productivity
          </p>
          <Link to={'/docs/boomerang-flow/introduction/getting-started'}>
            <Button renderIcon={ArrowRight16}>Get Started</Button>
          </Link>
        </div>
        <div className={styles.rightContent}>
          <iframe 
            className={styles.youtubeVideo}
            frameborder="0"
            src="https://www.youtube.com/embed/-lOninwMoz4"
          />
        </div>
      </div>
      <SectionTransition whiteToDark />
    </div>
  )
}
