import React from 'react'
import { Button } from '@boomerang-io/carbon-addons-boomerang-react'
import FlowablLogo from '../../graphics/FlowablLogo'
import * as styles from './Intro.module.scss'
import { ButtonLinkSection } from '../../landing/Skills/styles'
import './index.css';

export const Sponsor = () => (
    <section className="pt-20 2xl:pt-40 pb-40 2xl:pb-80 overflow-hidden">
        <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto mb-16 lg:mb-22 text-center">
                <span className="text-lg font-bold text-blue-500">Thanks to our sponsor</span>
                <h2 className="mt-6 mb-12 text-6xl font-bold font-heading">Try it out and automate for <i>free</i></h2>
            </div>
            <div className="flex flex-wrap items-top -mx-10">
                <div className="relative w-full lg:w-1/2 px-10 mb-16 lg:mb-0">
                    <div className="relative lg:max-w-md lg:ml-auto z-10">
                        <FlowLogo className="object-cover w-full lg:w-112 h-160" alt="Flowabl" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-10">
                    <div className="max-w-lg">
                        <ul>
                            <li className="flex pb-5 mb-4 border-b border-gray-50">
                                <div className="mr-8">
                                    <span className="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">1</span>
                                </div>
                                <div className="max-w-xs">
                                    <h3 className="mb-6 text-lg font-bold font-heading">Create account</h3>
                                    <p className="text-lg pb-5">Register for a free account. You can also reach out for greater benefits for open source and startup projects.</p>
                                    <a className="inline-block px-12 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="https://flowabl.io/pricing" data-config-id="primary-action">It's time to automate</a>
                                </div>
                            </li>
                            <li className="flex pb-5 mb-4 border-b border-gray-50">
                                <div className="mr-8">
                                    <span className="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">2</span>
                                </div>
                                <div className="max-w-xs">
                                    <h3 className="mb-6 text-lg font-bold font-heading">Start with Templates</h3>
                                    <p className="text-lg">Leverage the starter templates to take automation for a spin</p>
                                </div>
                            </li>
                            <li className="flex pb-5 border-b border-gray-50">
                                <div className="mr-8">
                                    <span className="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">3</span>
                                </div>
                                <div className="max-w-xs">
                                    <h3 className="mb-6 text-lg font-bold font-heading">Work with your team</h3>
                                    <p className="text-lg">Upgrade and unlock the power of automation with your team as well as other great features</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
)