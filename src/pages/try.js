import React from 'react'
import { Layout } from '../components/common'
import { Sponsor } from '../components/flow'
import '../../dist/index.css'

export default function Try() {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const anchor = window.location.hash
      if (anchor) {
        // eslint-disable-next-line global-require
        const SmoothScroll = require('smooth-scroll')
        const scroll = new SmoothScroll()
        const element = document?.querySelector(anchor)
        if (element) {
          scroll.animateScroll(element, 0, { speed: 200, offset: 70 })
        }
      }
    }
  }, [])
  return (
    <Layout>
      <Sponsor />
    </Layout>
  )
}
