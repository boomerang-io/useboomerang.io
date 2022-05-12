import React from 'react'
import * as styles from './Sponsor.module.scss'
import Link from '@boomerang-io/gatsby-theme-boomerang/src/components/Link'
import { Button } from '@boomerang-io/carbon-addons-boomerang-react'
import Launch16 from '@carbon/icons-react/es/launch/16'

export const Sponsor = () => (
  <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.headerSponsor}>
          Thanks to our sponsor
        </span>
        <h2 className={styles.headerText}>
          Try it out and automate for <i>free</i>
        </h2>
      </div>
      <div className={styles.contextFlexWrap}>
        <div className={styles.contentFlexItem}>
          <div className={styles.contentImageWrap}>
            <img
              className={styles.contentImage}
              src="images/flowabl-logo.svg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.contentFlexItem}>
          <div className={styles.maxwlg}>
            <ul>
              <li className={styles.listitem}>
                <div className={styles.mr8}>
                  <span className={styles.listnumber}>
                    1
                  </span>
                </div>
                <div className={styles.maxwxs}>
                  <h3 className={styles.listheader}>
                    Create account
                  </h3>
                  <p className={styles.listtext}>
                    Register for a free account. You can also reach out for
                    greater benefits for open source and startup projects.
                  </p>
                  <Link to="https://flowabl.io/pricing"><Button size="field" renderIcon={Launch16}>It's time to automate</Button></Link>
                </div>
              </li>
              <li className={styles.listitem}>
                <div className={styles.mr8}>
                  <span className={styles.listnumber}>
                    2
                  </span>
                </div>
                <div className={styles.maxwxs}>
                  <h3 className={styles.listheader}>
                    Start with Templates
                  </h3>
                  <p className={styles.listtext}>
                    Leverage the starter templates to take automation for a spin
                  </p>
                </div>
              </li>
              <li className={styles.listitem}>
                <div className={styles.mr8}>
                  <span className={styles.listnumber}>
                    3
                  </span>
                </div>
                <div className={styles.maxwxs}>
                  <h3 className={styles.listheader}>
                    Work with your team
                  </h3>
                  <p className={styles.listtext}>
                    Upgrade and unlock the power of automation with your team as
                    well as other great features
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
)
