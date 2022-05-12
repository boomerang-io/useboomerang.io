import React from 'react'
import { Layout, SEO } from '../components/common'
import { Sponsor } from '../components/flow'

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
      <SEO
        title="Try Boomerang Flow with the Flowabl Explorer Tier"
        description="Hosted no-code workflow automation based on Boomerang Flow"
      />  
      <Sponsor />
    </Layout>
  )
}
