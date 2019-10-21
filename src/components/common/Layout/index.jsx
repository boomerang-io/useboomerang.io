import React from 'react'
import { Footer } from 'Theme'
import { Global, Content } from './styles'

export const Layout = ({ children }) => (
	<>
		<Global />
		<Content>
			<main>{children}</main>
			<Footer />
		</Content>
	</>
)
