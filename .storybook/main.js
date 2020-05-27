const path = require('path')

const custom = require('../config/webpack.config')(process.env.NODE_ENV || 'development')

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: config => {
    /** Add aliases */
    config.resolve.alias = {
      ...config.resolve.alias,
      'Components/BuiltIn': path.join(__dirname, '../src/lib/built-in'),
      'frontend-link': path.join(__dirname, '../src/lib/built-in/Link'),
      Components: path.join(__dirname, '../src/components'),
    }

    /** Add global css */
    config.entry.push(path.join(__dirname, '../src/global.css'))

    return config
  },
}
