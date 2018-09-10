# vue-starter

# Table of Contents
* [VS Code Plugins](#vs-code-plugins)
* [Project Setup](#project-setup)
* [File Structure](#file-structure)
* [Getting Started](#getting-started)

## VS Code Plugins

### Must
- Vetur (Vue tooling)
- ESLint
- Prettier
- Babel ES6/ES7

### Optionals
- Vue Peek (goto defs)
- Auto Close Tag
- Auto Rename Tag
- Path Intellisense
- EditorConfig


## Project setup
```
npm install
```

### Compiles, hot-reloads and open a browser for development
```
npm start
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

## File Structure

Folder structure is based on VUE CLI 3.x and some personal preferences:

```
.
├── app.css                 * Main app styles.
├── App.vue
├── api                     * Abstractions for making API requests
├── assets                  * Assets that are imported into your components.
│   └── ...
├── components              * Components of the projects that are not the main views.
│   └── ...
├── main.js
├── mixins                  * Javascript code that is reused in different components.
│   └── ...
├── router                  * All the routes of your projects.
│   └── index.js
├── store                   * The Vuex constants in mutation-type.js, the Vuex modules in the subfolder modules
│   ├── index.js
│   ├── modules
│   │   └── ...
│   └── mutation-types.js
├── utils                   * Functions (regex value testing, constants or filters.)
│   └── ...
└── views                   * Routed components that represents pages.
    └── ...
```

## Getting Started

Soon :)
