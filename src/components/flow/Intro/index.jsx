import React from 'react'
import SectionTransition from '../SectionTransition'
import Link from '@boomerang-io/gatsby-theme-boomerang/src/components/Link'
import { Button, Loading } from '@boomerang-io/carbon-addons-boomerang-react'
import FlowLogo from '../../graphics/FlowLogo'
import * as styles from './Intro.module.scss'
import {
  ButtonLinkSection,
} from '../../landing/Skills/styles'

export const Intro = ({ linkButtons }) => {
  const [videoIsLoading, setVideoIsLoading] = React.useState(true)

  return (
    <div className={styles.container}>
      <SectionTransition />
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <div className={styles.flow}>
            <FlowLogo className={styles.flowLogo} />
            <p className={styles.flowText}>Boomerang Flow</p>
          </div>
          <p className={styles.flowTitle}>
            Event-driven cloud-native workflow automation and orchestration tool
          </p>
          <p className={styles.flowDescription}>
            A new scalable and extensible modern approach to automation focused
            on the end user experience with lower cost and increased
            productivity
          </p>
          {linkButtons && (
            <ButtonLinkSection>
              {linkButtons.map(item => (
                <Link to={item.link}><Button size="field" renderIcon={item.renderIcon}>{item.text}</Button></Link>
              ))}
            </ButtonLinkSection>
          )}
        </div>
        <div className={styles.rightContent}>
          <div className={styles.videoContainer}>
            {videoIsLoading && (
              <div className={styles.videoLoading}>
                <Loading withOverlay={false} />
              </div>
            )}
            <iframe
              allowFullScreen
              className={styles.youtubeVideo}
              frameborder="0"
              loading="lazy"
              onLoad={() => setVideoIsLoading(false)}
              src="https://www.youtube.com/embed/-lOninwMoz4?start=0"
            />
          </div>
        </div>
      </div>
      <SectionTransition whiteToDark />
    </div>
  )
}
