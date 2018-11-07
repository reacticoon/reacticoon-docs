---
id: reacticoon-cli-commands
title: Reacticoon commands
permalink: docs/reacticoon-cli-commands.html
prev: ''
next: ''
---

Reacticoon provides multiple command commands.

You can run them with `reacticoon [command]`.

## Reacticoon default commands

| command       | description                                            |
| ------------- | ------------------------------------------------------ |
| start         | start development server                               |
| build         | build the app                                          |
| build-library | build a library                                        |
| test          | run unit tests                                         |
| generate      | [generate code](./reacticoon-cli-generators)           |
| checkup       | [run the reacticoon checkup](./reacticoon-cli-checkup) |
| debug-plugins | debug the plugin configuration                         |

## Reacticoon plugin commands

Reacticoon can be extended via plugins. Those plugins can define their own commands.

Refer to your plugin documentation to find the commands it provides.

You can list the commands by using `reacticoon list-commands`.
