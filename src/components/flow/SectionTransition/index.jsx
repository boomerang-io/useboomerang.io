import React from 'react'
import * as styles from './SectionTransition.module.scss'

export const SectionTransition = ({ whiteToDark }) => {
  return whiteToDark ? (
    <div className={styles.whiteToDark}>
      <div className={styles.whiteToDarkThird} />
      <div className={styles.whiteToDarkSecond} />
      <div className={styles.whiteToDarkFirst} />
    </div>
  ) : (
    <div className={styles.darkToWhite}>
      <div className={styles.darkToWhiteThird} />
      <div className={styles.darkToWhiteSecond} />
      <div className={styles.darkToWhiteFirst} />
    </div>
  )
}

export default SectionTransition
