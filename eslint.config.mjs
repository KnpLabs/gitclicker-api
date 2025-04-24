// @ts-check

import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'

export default tseslint.config(
  tseslint.configs.recommended,
  stylistic.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        allowDefaultProject: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['eslint.config.mjs'],
    extends: [tseslint.configs.disableTypeChecked],
  },
)
