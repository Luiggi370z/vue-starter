// Global modules registration if you have a large list of modules,
// is tedious to register and import one by one in store/index.js so you
// can dot it automatically :)

// 1. You may need lodash for a couple of methods.
// 2. Import this file within store/index.js as 'modules' and use it in Vuex Store registration
//    e.g. new Vuex.Store({ modules })
// 3. Uncomment the following code:

// import camelCase from 'lodash/camelCase'

// const requireModule = require.context('.', false, /index\.js$/)
// const modules = {}

// requireModule.keys().forEach(fileName => {
//   // Don't register this file as a Vuex module
//   if (fileName === './index.js') return

//   const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ''))
//   modules[moduleName] = requireModule(fileName)
// })

// export default modules
