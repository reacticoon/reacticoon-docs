---
id: getting-started
title: Getting Started
permalink: docs/getting-started.html
prev: ''
next: 'reacticoon-ecosystem'
---

This page is an overview of the Reacticoon ecosystem documentation and related resources.

_Reacticoon_ is a JavaScript ecosystem for React and Redux.

## Installation

### Solution 1 - as local package (prefered way)

`yarn add --dev create-reacticoon-app`

By installing the create-reacticoon-app as a local package, you will be sure that you are using the right version of create-reacticoon-app for your project.

Note that when you install the package this way, you can't access to the `create-reacticoon-app` command. Here some solutions:

#### Use npx

It requires npm npm@5.2.0 are above.

`npx create-reacticoon-app`

You can learn more about npx on this [medium article](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).

#### Add an alias

In your shell configuration (~/.bashrc, ~/.zshrc), add an alias:

`alias create-reacticoon-app="./node_modules/.bin/create-reacticoon-app"`

#### Use the real path

`./node_modules/.bin/create-reacticoon-app ...`

### Solution 2 - as a global package

`yarn add -g create-reacticoon-app`

Note that this is not recommanded since you will have only this of create-reacticoon-app installed globally. If you have multiple projects that requires different versions of create-reacticoon-app, you will be in trouble.
