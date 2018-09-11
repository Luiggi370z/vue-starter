# vue-starter
Vue Starter project with Vue CLI 3.x and best practices.

# Table of Contents
* [Getting Started](#getting-started)
* [Prerequisites](#Prerequisites)
* [VS Code Plugins](#vs-code-plugins)
* [Project Setup](#project-setup)
* [File Structure](#file-structure)
* [LINT and Formatting](#lint-and-formatting)
* [Resources](#resources)

## Getting Started

For a long time I researched a good starter point to learn or to start a project with VueJS and basic plugins, best practices, conventions, file structure, and more, I found different pieces of what I was looking for so I decided to put them all together.

So basically, what you have here is a vue starter project created with Vue CLI 3.x and essential configurations to start a clean and fast VueJS App:

- Routing (Vue Router).
- Store Management (Vuex).
- Unit testing (mocha/chai).
- e2e Testing (Nightwatch).
- Lint and formatting (ESLint + Recommended).
- Solid and recommended file structure (supports dumb and smart components).
- Configuration files by environment.
- Custom scripts.

So feel free to fork and enjoy it =)

## Prerequisites

NodeJS
https://nodejs.org/en/

Vue CLI 3.x
```
npm install -g @vue/cli
```

After the installation of Vue CLI you can start the new vue cli [GUI](https://cli.vuejs.org/guide/creating-a-project.html#using-the-gui), just execute the following command in your terminal:
```
vue ui
```

Now you can add, remove or update any existing configuration in this starter project from a nice UI =).

## VS Code Plugins

My favorite IDE is VS Code so I included a list of basic plugins for VueJS apps (if you use a different IDE I'm pretty sure there should be the same plugins for your IDE):

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
src
├── app.css                 * Main app styles.
├── App.vue
├── api                     * Abstractions for making API requests
├── assets                  * Assets that are imported into your components.
│   └── ...
├── components              * Components of the projects that are not the main views.
│   └── ...
├── plugins                 * Init and config VueJS plugins(vue-moment, vuetify, etc).
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
├── views                   * Routed components that represents pages.
│   └── ...
└── .vscode                 * VS Code workspace settings to work with ESLint rules and formatting (you can also lint or fix on save ;D).
```

**Some important root files**
```
.
├── .editorconfig           * Configuration file that defines coding styles (also by programming language).
├── .env                    * Configuration file for environment variables (env.production, env.local, env.uat, etc).
├── .prettierrc             * Configuration file for formatting Prettier options.
└── .vue.config.js          * Vue CLI vue configuration file (you can also add or overwrite webpack configuration from this file,
                              check official documentation for more details).
```

### Interesting Resource

[How to integrate ESlint with VueJs and Vetur](https://alligator.io/vuejs/eslint-vue-vetur/)

## Naming conventions

Here are a few important conventions from the Vue.js [official style guide](https://vuejs.org/v2/style-guide/)

- Component names should always be multi-word, except for root “App” components. Use “UserCard” or “ProfileCard” instead of “Card” for example.
Each component should be in its own file.
- Filenames of single-file components should either be always PascalCase or always kebab-case. Use “UserCard.vue” or “user-card.vue”.
- Components that are only used once per page should begin with the prefix “The”, to denote that there can be only one. For example for a navbar or a footer you should use “TheNavbar.vue” or “TheFooter.vue”.
- Child components should include their parent name as a prefix. For example if you would like a “Photo” component used in the “UserCard” you will name it “UserCardPhoto”. It’s for better readability since files in a folder are usually order alphabetically.
- Always use full name instead of abbreviation in the name of your components. For example don’t use “UDSettings”, use instead “UserDashboardSettings”.

## LINT and Formatting

Vue starter project is using the [VUE Recommended](https://vuejs.org/v2/style-guide/#Priority-C-Rules-Recommended-Minimizing-Arbitrary-Choices-and-Cognitive-Overhead) set of rules plus a additional custom rules that you can find in ```.eslintrc.js``` file

## Resources

I got inspired by:
- https://vuex.vuejs.org/en/structure.html
- https://itnext.io/how-to-structure-a-vue-js-project-29e4ddc1aeeb
