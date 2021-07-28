import React from 'react'
import cx from 'classnames'
import SectionTransition from '../SectionTransition'
import { Loading } from '@boomerang-io/carbon-addons-boomerang-react'
import * as styles from './FlowInfoSection.module.scss'

export const FlowInfoSection = ({
  descriptionArray = [],
  id,
  imageSrc,
  subtitle,
  title,
  transition = true,
  theme = 'dark',
  videoSrc,
}) => {
  const [videoIsLoading, setVideoIsLoading] = React.useState(true)
  const isLightTheme = theme === 'light'

  const TextContent = () => {
    return (
      <>
        <p className={cx(styles.contentTitle, styles[theme])}>{title}</p>
        {subtitle && (
          <p className={cx(styles.contentSubtitle, styles[theme])}>
            {subtitle}
          </p>
        )}
        <ul className={cx(styles.contentDescritionList, styles[theme])}>
          {descriptionArray.map((description, index) => (
            <li key={index} className={styles.contentDescription}>
              {description}
            </li>
          ))}
        </ul>
      </>
    )
  }

  const VideoImageContent = () => {
    if (imageSrc) return <img className={styles.contentImage} src={imageSrc} />
    if (videoSrc)
      return (
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
            src={videoSrc}
          />
        </div>
      )

    return null
  }
  return (
    <>
      <div id={id} className={cx(styles.container, styles[theme])}>
        {isLightTheme ? (
          <div className={styles.content}>
            <div className={styles.leftContent}>
              <TextContent />
            </div>
            <div
              className={cx(styles.rightContent, {
                [styles.isVideo]: Boolean(videoSrc),
              })}
            >
              <VideoImageContent />
            </div>
          </div>
        ) : (
          <div className={styles.content}>
            <div
              className={cx(styles.leftContent, {
                [styles.isVideo]: Boolean(videoSrc),
              })}
            >
              <VideoImageContent />
            </div>
            <div className={styles.rightContent}>
              <TextContent />
            </div>
          </div>
        )}
      </div>
      {transition && <SectionTransition whiteToDark={isLightTheme} />}
    </>
  )
}
