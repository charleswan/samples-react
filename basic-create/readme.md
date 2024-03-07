# Create project

```sh
npx create-react-app react-basic
```

- `npx`: Node.js command line tools.
- `create-react-app`: Core package(Fixed writing).
- `react-basic`: Project name.

# Running project

`package.json` => `scripts`

```sh
Success! Created react-basic at A:\1\samples-react\react-basic
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd react-basic
  npm start

Happy hacking!
```

# Issues

## babel-preset-react-app

```sh
One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.
```

```sh
npm install --save-dev @babel/plugin-proposal-private-property-in-object
```

From: https://github.com/facebook/create-react-app/issues/13325#issuecomment-1832645046

# Reference

- [Start a New React Project](https://react.dev/learn/start-a-new-react-project)
- [启动一个新的 React 项目](https://zh-hans.react.dev/learn/start-a-new-react-project)
