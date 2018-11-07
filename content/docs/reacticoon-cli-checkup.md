---
id: reacticoon-cli-checkup
title: Reacticoon checkup
permalink: docs/reacticoon-cli-checkup.html
prev: ''
next: ''
---

Reacticoon provides a `checkup` command to run a checkup of your project.

```cmd
reacticoon checkup
```

There are a large veriety of checkup such as:

- Reacticoon config validation
- Reacticoon plugins validation
- node_modules validation and version check

Reacticoon will run checkup methods defined by:

- Reacticoon
- Your Reacticoon plugins

```cmd
$ reacticoon checkup
--- create-reacticoon-app checkup
reacticoon: Check Reacticoon configuration
✔ 'reacticoon' config found


create-reacticoon-app: Check for create-reacticoon-app
✔ create-reacticoon-app is defined on your package.json
✔ create-reacticoon-app is up to date

react-version: Check for react package verion✔ react and react-dom version match.


reacticoon: Check for Reacticoon✖ reacticoon is missing from your package.json
```
