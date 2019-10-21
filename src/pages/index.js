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
				<p>
					Create policy and rule definitions. Validate dynamically with data.
					Leveraging{' '}
					<a href="https://www.openpolicyagent.org/">
						Open Policy Agent (OPA){' '}
					</a>
					at its core.
				</p>
			)}
			imgSrc={bosun}
			listItems={['CI/CD Gates', 'Generic policy validation']}
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
