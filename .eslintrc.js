module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      'eslint:recommended',
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'quotes' : ['warn', 'single'],
      'no-unused-vars' : 'error',
      'block-spacing' : ['warn', 'never'],
      'object-curly-spacing' : ['warn', 'always'],
      'indent': ['error', 2],
      'semi' : ['warn', 'always']
    },
    parserOptions: {
      parser: 'babel-eslint'
    },
    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)'
        ],
        env: {
          mocha: true
        }
      }
    ]
  }
  
