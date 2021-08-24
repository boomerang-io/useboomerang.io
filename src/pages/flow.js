import React from 'react'
import { Intro, FlowInfoSection } from '../components/flow'
import { Layout, SEO } from '../components/common'
import Execution from '../components/graphics/img/Execution.png'
import Insights from '../components/graphics/img/Insights.png'
import Tasks from '../components/graphics/img/Tasks.png'
import WorkflowEditor from '../components/graphics/img/WorkflowEditor.png'

export default function Flow() {
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
        title="Boomerang Flow"
        description="Open-source and cloud-native orchestration tool for workflow automation"
      />
      <Intro />
      <FlowInfoSection
        id="workflows"
        title="Workflows"
        descriptionArray={[
          'Drag&Drop predefined or custom created Tasks, chain them to build your workflow.',
          'Create workflow parameters to provide dynamic data at runtime.',
          'View and update general information about the workflow, set triggers, and configure options.',
        ]}
        imageSrc={WorkflowEditor}
      />
      <FlowInfoSection
        id="demo"
        theme="light"
        title="A Raw Introduction"
        descriptionArray={[
          'An introduction to Boomerang Flow',
          'What is it?',
          'What does it do?',
          'Execute and check the results of the newly created workflow.',
        ]}
        videoSrc="https://www.youtube.com/embed/erBEQdBHFJU?start=0"
      />
      <FlowInfoSection
        id="tasks"
        title="Tasks"
        descriptionArray={[
          'Continuous increasing list of no-to-low code prebuilt open-source Tasks.',
          "Fully extensible by supporting prebuilt Tekton® Catalog Task and if that's not enough, build your own Task based on any Docker image.",
          "With an enhanced visual platform to abstract the experience so you don't need to work in YAML directly in Kubernetes.",
        ]}
        imageSrc={Tasks}
      />
      <FlowInfoSection
        id="activity"
        theme="light"
        title="Activity"
        descriptionArray={[
          'Check the execution details of your workflow design with visual indication of both the status of each task, as well as the link state.',
          'The Activity page provides you with a snapshot breakdown with the ability to filter across multiple criterias.',
          'View logs and output properties as well as cancel running Workflows.',
          'Approve or Decline Manual Tasks.',
        ]}
        imageSrc={Execution}
      />
      <FlowInfoSection
        id="insights"
        title="Insights"
        subtitle="Gain insights into workflow metrics and real time statistics like:"
        descriptionArray={[
          'number of executions (total and by workflow).',
          'peak execution periods.',
          'run time durations.',
          'status percentage breakdown.',
        ]}
        imageSrc={Insights}
      />
      <FlowInfoSection
        id="demo"
        theme="light"
        title="Demo"
        descriptionArray={[
          'Brief look through the admin side of Flow.',
          'Step-by-step introduction into creating a demo workflow.',
          'Execute and check the results of the newly created workflow.',
        ]}
        videoSrc="https://www.youtube.com/embed/-lOninwMoz4?start=1407"
      />
    </Layout>
  )
}
