# trucknet-boilerplate-typescript-react

> Boilerplate for a new react project with material UI and Typescript!

## How to use

- `git clone` this repo
- `rm -rf .git`
- Change the name, description, and git repo inside package.json
- `git init`
- `git add . && git commit -am "initial commit" --no-verify`

## Storybook

This repo includes [Storybook](https://storybook.js.org/) - a great way to develop components. [Try a tutorial](https://www.learnstorybook.com/) to get started, if you are not familiar with this instrument.

## Component Testing

[react-testing-library](https://github.com/kentcdodds/react-testing-library) is used to write integration tests of React components. [jest-dom](https://github.com/gnapse/jest-dom#readme) is used to have better development experience to write expectations.

If you need any inspiration on how to write tests with different libraries from react world (`react-redux`, `react-router`) you can always look at [Examples](https://github.com/kentcdodds/react-testing-library#examples) and [official documentation](https://testing-library.com/docs/intro).

## Bootstrap!

1. `git clone git@github.com:trucknet-io/trucknet-boilerplate-typescript-react.git project-name`
1. `cd project-name`
1. `rm -rf .git`
1. `git init`
1. `git remote add origin`
1. `git flow init`
1. Edit `package.json` to change name (upper-snake-case), description and git repository of the project
1. Edit `.sentryclirc` to put your sentry project name and API token. To get API token you can use `npx -p @sentry/cli sentry-cli --url https://sentry.cluster-staging.trucknet.io login`
1. Edit `.envcmdrc` to put your Sentry DSN

## Added libraries

### Frontend

- React v16
- Typescript v3
- material-ui v3
- material-ui/icons v3

### Build

- env-cmd
- Webpack v4
- Babel v7 (only for storybooks)
- awesome-typescript-loader v5
- favicons-webpack-plugin
- html-webpack-plugin
- file-loader
- webpack-bundle-analyzer

### Dev

- @storybook/react v4
- jest v23
- ts-jest
- tslint (with trucknet config)
- react-testing-library
- lint-staged
- prettier
- husky
- commit-prompt
