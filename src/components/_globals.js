// Global components registration if you need some base-components everywhere
// 1. You may need lodash for a couple of methods.
// 2. Import _globals.js within your main.js file
// 3. Uncomment the following code:

// import Vue from 'vue'
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'
// // Require in a base component context
// const requireComponent = require.context('.', false, /base-[\w-]+\.vue$/)

// requireComponent.keys().forEach(fileName => {
//   // Get component config
//   const componentConfig = requireComponent(fileName)
//   // Get PascalCase name of component
//   const componentName = upperFirst(
//     camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
//   )
//   // Register component globally
//   Vue.component(componentName, componentConfig.default || componentConfig)
// })
