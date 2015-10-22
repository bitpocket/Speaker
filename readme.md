# Overview
Speaker is a tool for learn a language by using google speech synthesizer and recognizer.
# Browsers
- Chrome
- Firefox ?
- IE ?

# Technology stack
#### Production
- [Angular2](https://angular.io/), systemjs, jquery, bootstrap, underscore,
- [Azure](http://speaker.azurewebsites.net/)

#### Development
- [nodejs](https://nodejs.org/en/), scss,  gulp, gulp-sass, gulp-tsc
- live-server,

#### IDE's
- [Atom](https://atom.io/), atom-typescript, atom-beautify
- [Brackets](http://brackets.io/),

# Local installation step by step
#### Development
- install [nodejs](https://nodejs.org/en/) for Node Package Manager (npm)
- install Angular2
```
npm i angular2
```
- install live-server
```
npm i -g live-server
```
- install gulp task runner globally
```
npm i --g gulp
```
- Install gulp task runner in project
```
npm i --save-dev gulp
```
- Install gulp-sass compiler (if not supported by IDE)
```
npm i gulp-sass
```
- Install gulp typescript compiler (if not supported by IDE)
```
npm i gulp-tsc
```

#### Production
- Add an App Setting on Azure to point at index.html folder
```
key:  Project
value: src
```

# Run
#### Development
- run gulp task runner
```
gulp
```
- start live-server server (defined in package.json)
```
npm start
```

# Deploy
#### Azure
