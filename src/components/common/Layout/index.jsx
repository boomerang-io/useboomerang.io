import React from 'react'
import { Footer } from '../../theme'
import { Content } from './styles'

export const Layout = ({ children }) => (
	<Content>
		<main>{children}</main>
		<Footer />
	</Content>
)
