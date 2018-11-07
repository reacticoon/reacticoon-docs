---
id: reacticoon-create-project
title: Create a new project
permalink: docs/reacticoon-create-project.html
prev: 'reacticoon-ecosystem'
next: 'reacticoon-project-architecture'
---

## Create the app directory

_You’ll need to have Node >= 6 on your local development machine_

```cli
mkdir my-app
cd my-app
yarn install create-reacticoon-app
create-reacticoon-app init-app my-app
yarn start
```

Note: [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher.
If you don't have npx, look at the [other solutions](./getting-started).

It will create a directory called my-app inside the current folder.
This directory will be initiate with a default Reacticoon project structure and its dependencies:

```md
my-app/
│── README.md
│── node_modules
│── package.json
│── .gitignore
│── public/
│ │── favicon.ico
│ │── index.html
│ │── manifest.json
│── src/
│ │── index.js
│ │── modules/
│ │── components/
│── pages/
```

Once the installation is done, you can open your project folder:

```cli
cd my-app
```

## Start to code

Reacticoon is using [create-react-app](https://github.com/facebook/create-react-app) under the hood, that preconfigure Webpack and Babel for you.

You can now runs the app in development mode, using `yarn start`.

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

## User guide

You can follow the [create-react-app user guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) for more information.
Note that while `create-reacticoon-app` is using `create-react-app`, [some modification has been made](./config-overrides).
