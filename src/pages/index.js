import React from 'react'
import { Intro, Skills, Projects } from '../components/landing'
import { Layout, SEO } from '../components/common'
import Launch16 from '@carbon/icons-react/es/launch/16'
import bosun from '../../static/illustrations/bosun.svg'
import professor from '../../static/illustrations/professor.svg'

export default () => (
  <Layout>
    <SEO />
    <Intro id="content" />
    <Skills
      reverse
      title="Flow"
      paragraph={
        <>
          Open-source and cloud-native orchestration tool for workflow automation.
          <div style={{ paddingBottom: '1rem' }} />
          A new scalable and extensible modern approach to automation focused on
          the end user experience with lower cost and increased productivity.
        </>
      }
      imgAlt="Flow"
      imgSrc={professor}
      listItems={[
        'Orchestrate jobs on Kubernetes',
        'A "no/low-code" experience for non-technical users',
        'Translate technical complexities into friendly easy to navigate interface'
      ]}
      linkButtons={[
        {
          text: 'View Page',
          link: '/flow',
        },
        {
          text: 'Get Started',
          link: '/docs/boomerang-flow/introduction/getting-started',
        },
      ]}
    />
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
          link: '/docs/boomerang-bosun/introduction/getting-started',
        },
        {
          text: 'Try Me',
          link: 'https://try.useboomerang.io/public/bosun/web/bosun',
          renderIcon: Launch16,
        },
      ]}
    />
    <Projects />
    {
      // <Contact />
    }
  </Layout>
)
