---
title: Installing Extensions
index: 1
---

# Installing and Configuring Extensions

The following information will provide detail on how to configure a built in extension in your own installation.

## Slack App

An embedded contextual experience inside Slack is a powerful way for users and teams to use automation quickly and easily without having to leave Slack.

[Read more about the Slack extension experience](/docs/boomerang-flow/getting-to-know/slack).

### Prepare

Replace the substitutions in the following YAML file. You will need this in step 4 of Configuration.

- `<URL_REPLACE_ME>` = a DNS and any context prefix for your Flow installation
- `<GLOBAL_TOKEN_REPLACE_ME>` = a global scoped API token generated in Flow.

```YAML
display_information:
  name: Boomerang Flow
  description: Easily trigger your no-code workflows.
  background_color: "#0072C3"
  long_description: This is automation to help make you more productive, maximise efficiency, and save time. This is the future of workflow automation. Trigger your no-code workflows and solve problems. Easy.
features:
  bot_user:
    display_name: Boomerang Flow
    always_online: true
  slash_commands:
    - command: /workflow
      url: https://<URL_REPLACE_ME>/apis/v1/extensions/slack/commands?access_token=<GLOBAL_TOKEN_REPLACE_ME>
      description: Run awesome automation
      usage_hint: "[workflowId]"
      should_escape: false
oauth_config:
  redirect_urls:
    - https://<URL_REPLACE_ME>/apis/v1/extensions/slack/auth?access_token=<GLOBAL_TOKEN_REPLACE_ME>
  scopes:
    bot:
      - commands
      - users:read
      - users:read.email
      - chat:write
settings:
  event_subscriptions:
    request_url: https://<URL_REPLACE_ME>/apis/v1/extensions/slack/events?access_token=<GLOBAL_TOKEN_REPLACE_ME>
    bot_events:
      - app_home_opened
  interactivity:
    is_enabled: true
    request_url: https://<URL_REPLACE_ME>/apis/v1/extensions/slack/interactivity?access_token=<GLOBAL_TOKEN_REPLACE_ME>
  org_deploy_enabled: false
  socket_mode_enabled: false
  token_rotation_enabled: false
```

### Configuration 

1. Navigate to [https://api.slack.com/apps?new_app=1(https://api.slack.com/apps?new_app=1). If a modal does not appear, click on 'Create New App'.
2. On the 'Create an app' modal, select 'From an app manifest'
3. Select the Workspace you would like to create the app in, and select 'Next'
4. Copy and paste the manifest you prepared earlier, and select 'Next'
5. Review the details, and select 'Create'

## Post Install

1. Scroll down to 'Display Information' and update any necessarily details and upload an image
2. You have two options for integrating Flow back to this Slack app
  - Select 'Install To Workspace' to generate an App-Level Token that you can copy to Flow's Settings. The app will only be available to this Slack workspace
  - Select 'Distribute App' and copy the App ID, Client ID, and Client Secret to Flow's Settngs. The app will be available for installation to any Workspace via a URL (or the App Directory if you choose). Flow will automatically handle using the token generated upon installation to that Workspace.