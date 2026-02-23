import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import jest from 'eslint-plugin-jest';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

const tsFiles = ['**/*.{ts,tsx,cts,mts}'];
const prettierConfig = prettier as unknown as typeof js.configs.recommended;

export default defineConfig([
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/coverage/**', 'eslint.config.mts'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: tsFiles,
  })),
  ...tseslint.configs.stylisticTypeChecked.map((config) => ({
    ...config,
    files: tsFiles,
  })),

  {
    files: tsFiles,
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.node,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
    },
  },

  {
    files: ['**/*.test.ts', '**/*.spec.ts'],
    plugins: { jest },
    languageOptions: { globals: globals.jest },
    rules: {
      ...jest.configs['flat/recommended'].rules,
    },
  },

  {
    files: ['**/*.cjs', 'jest.config.js'],
    languageOptions: {
      sourceType: 'script',
      globals: globals.node,
    },
  },

  prettierConfig,
]);
