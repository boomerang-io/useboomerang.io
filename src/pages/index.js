import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Projects } from 'Components/landing'
import bosun from 'Static/illustrations/bosun.svg'
import comingSoon from 'Static/illustrations/coming-soon.svg'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<Skills
			title="Bosun"
			paragraph={(
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
			)}
			imgSrc={bosun}
			listItems={['CI/CD Gates', 'Generic policy validation']}
			buttonText="Get Started"
			buttonLink="https://github.com/boomerang-io/boomerang.docs/blob/stable/content/bosun.md"
		/>
		<Skills
			reverse
			title="Flow"
			paragraph="Cloud-native workflow automation. Coming soon."
			imgSrc={comingSoon}
		/>
		<Projects />
		{
			// <Contact />
		}
	</Layout>
)
