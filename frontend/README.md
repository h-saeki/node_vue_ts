# frontend

## Project setup
```
npm install
```

When you use Visual Studio Code, add `settings.json`.
```
{
    "files.associations": {
        "*.vue": "vue"
    },
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        {
          "language": "javascript",
          "autoFix": true
        },
        {
          "language": "typescript",
          "autoFix": true
        },
        {
          "language": "vue",
          "autoFix": true
        }
      ],
    "vetur.format.defaultFormatter.js": "none"
}
```


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
