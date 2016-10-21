module.exports = {
  "extends": ["google"],
  "parser": "babel-eslint",
  "plugins": ["flowtype", "babel", "mocha"],
  "rules": {
    "no-sync": 1,
    "consistent-return": 0,
    "no-console": 0,
    "block-scoped-var": 1,
    "complexity": 1,
    "array-callback-return": 1,
    "eol-last": 0, // Do not require space at the end of the line
    "object-curly-spacing": 0, // Collides with flow type
    "quotes": [1, "double"], // Only allow double quotes
    "prefer-const": 1, // Use const when ever possible
    "no-var": 1, // Don't allow 'var'
    "require-jsdoc": 0, // Turn off jsdoc on functions (Google)
    "no-unused-vars": 0, // Do not warn on unused variables (Google). FIX
    "no-trailing-spaces": 0, // Allow random whitespace (Google)
    "no-warning-comments": 0, // Allow TODO (Google)
    "flowtype/define-flow-type": 1,
    "flowtype/require-parameter-type": 0,
    "flowtype/require-return-type": 0,
    "flowtype/space-after-type-colon": [0, "always"],
    "flowtype/space-before-type-colon": 0,
    "flowtype/type-id-match": [1,"^([A-Z][a-zA-Z0-9]+T)$"],
    "flowtype/use-flow-type": 1,
    "mocha/no-exclusive-tests": 0,
    "mocha/handle-done-callback": "error",
    "mocha/no-identical-title": "error",
    "flowtype/require-valid-file-annotation": [2, "always"],
    "no-unused-expressions": 0,
    "max-len": ["error", 100]
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  },
  "parserOptions": {
    "ecmaVersion": 7,
    "ecmaFeatures": {
      "modules": true
    }
  }
};