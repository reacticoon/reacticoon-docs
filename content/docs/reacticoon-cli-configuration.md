---
id: reacticoon-cli-configuration
title: Reacticoon CLI configuration
permalink: docs/reacticoon-cli-configuration.html
prev: ''
next: ''
---

Learn how you can extend and configure `create-reacticoon-app`.

`create-reacticoon-app` can be configured via the `config/reacticoon.js` file.
This file will contain your app configuration, alongside your reacticoon-cli plugins.

A reacticoon-cli plugin is a plugin that can provides:

- [generators](./reacticoon-cli-generators)
- [commands](./reacticoon-cli-commands)
- [checkup](./reacticoon-cli-checkup)

Note: you can debug your plugins configuration by running `reacticoon debug-plugins`.

```js
module.exports = {
  plugins: [
    {
      resolve: 'reacticoon-cli-plugin-test',
      options: {},
    },
  ],
};
```
