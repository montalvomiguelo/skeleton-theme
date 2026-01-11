import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['assets/']
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser
      }
    }
  },
  js.configs.recommended,
  eslintConfigPrettier
]
