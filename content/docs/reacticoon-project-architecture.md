---
id: reacticoon-project-architecture
title: Reacticoon project architecture
permalink: docs/reacticoon-project-architecture.html
prev: 'reacticoon-create-project'
next: 'available-scripts'
---

Reacticoon provides a project architecture designed for both small and large projects.

This architecture is module-oriented and focuses on the separation of concerns.

On your app root directory (`src/`), you will find:

| directory  | description                            |
| ---------- | -------------------------------------- |
| modules    | Contains your Reacticoon modules       |
| pages      | Contains the pages of your application |
| components | Contains your generic view components  |
| plugins    | Contains your own Reacticoon plugins   |

## Introduction of the different directories

### modules

A Reacticoon module contains:

- a reducer, or a combination of reducers
- actions
- selectors
- middlewares
- constants: enum,
- data formatters: used by your selectors to format the data they return.
- utils: utility functions that can be used both inside and outside your module.
- containers: You should always create a container to use on your views. This container will give access of your modules actions and data.

Note: this is an overview of a module directory, you can learn more about it here. TODO: link

### pages

Contains the pages of your routes.
You can divide this directory in sub-directories.

E.g:

```md
- pages
  - user
    - profile
      - index.js // export default ProfilePage
      - ProfilePage.js // page configuration, retrieve the data from the container
      - View.js // Contains the page view content
      - views/ // sub-views / components of the View.js
    - edit
  - auth
    - login
    - register
    - passwordRecovery
```

### components

### plugins

## Shortcuts

When importing files, there is a moment where you need files that are in another directory of your project. For example on a component, you need to require from a module.

It can gives something like:

```jsx
import Test from '../../../../../../modules/test';
```

Reacticoon allows you to simplify those imports, by defining aliases:

```js
import Test from 'modules/test';
```

The default Reacticoon aliases are:

| shortcut   | path           |
| ---------- | -------------- |
| app        | src/app        |
| modules    | src/modules    |
| plugins    | src/plugins    |
| components | src/components |

Note: You can create your own shortcuts via the create-reacticoon-app configuration. TODO: link.
