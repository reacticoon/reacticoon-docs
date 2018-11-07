---
id: reacticoon-cli-generators
title: Reacticoon generators
permalink: docs/reacticoon-cli-generators.html
prev: ''
next: ''
---

Reacticoon provides a way to generate code: the generators.

You can run them with `reacticoon generate [options]`.

## Reacticoon plugin generators

Reacticoon can be extended via plugins. Those plugins can define their own generators.

Refer to your plugin documentation to find the generators it provides.

## Reacticoon generators

Reacticoon provides multiple generators:

### Generate modules

#### Simple module

Options:

- _moduleName_ (required). Must be suffix with 'Module'. You should always prefix it (with `App::` if the module belongs to your app).
- _actionName_ (optionnal). The name of the action to be created with the module. If not specified, Reacticoon will try to infer its name from the module name.

```cmd
reacticoon generate simple-module App::TestModule runTest
```
