import React from 'react'
import { Intro, Skills, Projects } from '../components/landing'
import { Layout, SEO } from '../components/common'
import bosun from '../../static/illustrations/bosun.svg'
import professor from '../../static/illustrations/professor.svg'

export default () => (
  <Layout>
    <SEO />
    <Intro id="content" />
    <Skills
      title="Bosun"
      paragraph={
        <>
          Policy-based gating system that combines Policy Definitions with Rules
          and Metrics Data to validate if specific Gates are passed.
          <div style={{ paddingBottom: '1rem' }} />
          Bosun provides a UI to interact with and manage your policies and
          validation activities. It leverages{' '}
          <a href="https://www.openpolicyagent.org/">
            Open Policy Agent (OPA){' '}
          </a>{' '}
          at its core.
        </>
      }
      imgAlt="Bosun"
      imgSrc={bosun}
      listItems={['CI/CD Gates', 'Generic policy validation']}
      linkButtons={[
        {
          text: 'Get Started',
          link: '/bosun/getting-started',
        },
        {
          text: 'Try Me',
          link: 'https://try.useboomerang.io/public/bosun/web/bosun',
        },
      ]}
    />
    <Skills
      reverse
      title="Flow"
      paragraph="Cloud-native workflow automation"
      imgAlt="Flow"
      imgSrc={professor}
      listItems={[
        'Orchestrate jobs on Kubernetes',
        '"No-code" workflow creation',
      ]}
      linkButtons={[
        {
          text: 'Get Started',
          link: '/flow/getting-started',
        },
        {
          text: 'Learn More',
          link:
            'https://github.com/boomerang-io/boomerang.docs/blob/stable/content/flow.md',
        },
      ]}
    />
    <Projects />
    {
      // <Contact />
    }
  </Layout>
)
