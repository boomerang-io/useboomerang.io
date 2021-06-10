import React from 'react';
import cx from "classnames";
import SectionTransition from '../SectionTransition'
import * as styles from './FlowInfoSection.module.scss';

export const FlowInfoSection = ({ descriptionArray = [], imageSrc, title, transition = true, theme = "dark" }) => {
  const isLightTheme = theme === "light";
  return (
    <>
      <div className={cx(styles.container, styles[theme])}>
        {isLightTheme ? (
          <div className={styles.content}>
            <div className={styles.leftContent}>
              <p className={cx(styles.contentTitle, styles[theme])}>{title}</p>
              <ul className={cx(styles.contentDescritionList, styles[theme])}>
                {descriptionArray.map((description, index) => <li key={index} className={styles.contentDescription}>{description}</li>)}
              </ul>
            </div>
            <div className={styles.rightContent}>
              {imageSrc && <img className={styles.contentImage} src={imageSrc}/>}
            </div>
          </div>
        ) : (
          <div className={styles.content}>
            <div className={styles.leftContent}>
              {imageSrc && <img className={styles.contentImage} src={imageSrc}/>}
            </div>
            <div className={styles.rightContent}>
              <p className={cx(styles.contentTitle, styles[theme])}>{title}</p>
              <ul className={cx(styles.contentDescritionList, styles[theme])}>
                {descriptionArray.map((description, index) => <li key={index} className={styles.contentDescription}>{description}</li>)}
              </ul>
            </div>
          </div>
        )}
      </div>
      {transition && <SectionTransition whiteToDark={isLightTheme} />}
    </>
  )
}
