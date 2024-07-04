import eslint from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginNoRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';
import vueEslintParser from 'vue-eslint-parser';

const tsConfigFiles = ['tsconfig.app.json', 'tsconfig.node.json'];

// TODO:[yhs] no-console prod 확인
export default typescriptEslint.config(
  eslint.configs.recommended,
  pluginImport.flatConfigs.recommended,

  /** @see https://typescript-eslint.io/getting-started/typed-linting */
  ...typescriptEslint.configs.recommendedTypeChecked,
  ...typescriptEslint.configs.stylisticTypeChecked,

  /** @see https://eslint.vuejs.org/user-guide/#usage */
  ...pluginVue.configs['flat/recommended'],

  configPrettier,

  {
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
    ignores: ['{dist,public}/**/*'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      /** @see https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser */
      parser: vueEslintParser,
      parserOptions: {
        /** @see https://typescript-eslint.io/packages/typescript-eslint#advanced-usage */
        parser: typescriptEslint.parser,
        /** @see https://typescript-eslint.io/packages/parser/#project */
        tsconfigRootDir: import.meta.dirname,
        project: tsConfigFiles,
        extraFileExtensions: ['.vue'],
      },
    },
    /** @see https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#typescript */
    settings: {
      'import/resolver': {
        typescript: {
          project: tsConfigFiles,
        },
        node: true,
      },
    },
  },

  {
    plugins: {
      '@typescript-eslint': typescriptEslint.plugin,
      'no-relative-import-paths': pluginNoRelativeImportPaths,
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'prod' ? 'error' : 'warn',
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { allowSameFolder: false, rootDir: 'src', prefix: '@' },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'type',
            'builtin',
            'external',
            'internal',
            'index',
            ['parent', 'sibling'],
            'unknown',
          ],
          pathGroups: [
            {
              pattern: '@/api/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/composable/**',
              group: 'internal',
              position: 'before',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
  },

  {
    /** @see https://typescript-eslint.io/getting-started/typed-linting#how-can-i-disable-type-aware-linting-for-a-subset-of-files */
    files: ['**/*.{js,jsx}'],
    ...typescriptEslint.configs.disableTypeChecked,
  },
);
