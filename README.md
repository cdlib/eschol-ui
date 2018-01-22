
#The eScholarship UI Library

This repository contains all UI elements for the eScholarship website. It serves as a proof of concept for demonstrating the UI apart from its integration into the [main eScholarship project](https://github.com/eScholarship/jschol). It is developed and maintained using an included, customized Gulp toolkit.

## Using the Gulp Toolkit

### Software Requirements

* [Node and npm](https://nodejs.org/en)

* [Bower](https://bower.io): `$ sudo npm install -g bower`

* [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md): `$ sudo npm install -g gulp-cli`

### Toolkit Installation

1. Clone this repo and cd to `eschol-ui`

2. Run `$ npm install` to install Gulp plugins

3. Run `$ bower install` to install Bower libraries

### Running the Toolkit

* Cd to cd to `eschol-ui`

* While developing files in **/app**, run `$ gulp` to watch and process live changes to the code

* To create a finished build of the UI Library, run the `$ gulp build` task. Run `$ gulp deploy` to publish it to  to GitHub Pages at [https://cdlib.github.io/eschol-ui](https://cdlib.github.io/eschol-ui)

#### Other Tasks

* After adding new images to **/images**, run `$ gulp minify-images` to optimize them

## Developing Components

[to be written]

### Component Organization

[to be written]

### Best Practices

[to be written]
