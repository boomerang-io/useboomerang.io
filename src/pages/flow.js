import React from 'react';
import { Intro, FlowInfoSection } from '../components/flow'
import { Layout, SEO } from '../components/common'
import { Editor, Execution, Insights } from '../components/graphics/img'

export default function Flow() {
  return (
    <Layout>
      <SEO />
      <Intro />
      <FlowInfoSection 
        title="Workflows" 
        descriptionArray={[
          "Create your workflow using tasks.",
          "Edit and delete workflow parameters that can be used by the workflow as it executes.",
          "View and update general information about the workflow, set triggers, and configure options."
        ]}
        imageSrc={Editor}
      />
      <FlowInfoSection 
        theme="light"
        title="Activity"
        descriptionArray={[
          "See your workflow execution in action.",
          "See workflow execution status, its duration and information about the tasks."
        ]}
        imageSrc={Execution}
      />
      <FlowInfoSection 
        title="Insights" 
        descriptionArray={[
          "See metrics and track activities"
        ]}
        imageSrc={Insights}
      />
    </Layout>
  )
}
