
# The eScholarship UI Library

This repository contains all UI elements for the eScholarship website. It serves as a proof of concept for demonstrating the UI apart from its integration into the [main eScholarship project](https://github.com/eScholarship/jschol). It is developed and maintained using an included, customized Gulp toolkit.

## Using the Gulp Toolkit

### Software Requirements

* [Node and npm](https://nodejs.org/en)

* [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

### Toolkit Installation

1. Clone this repo and cd to `eschol-ui`

2. Run `$ npm install` to install Gulp plugins

### Running the Toolkit

* Cd to `eschol-ui`

* While developing files in **/app**, run `$ gulp` to watch and process live changes to the code

* To create a finished build of the UI Library, run the `$ gulp build` task. Run `$ gulp deploy` to publish it to GitHub Pages at [https://cdlib.github.io/eschol-ui](https://cdlib.github.io/eschol-ui)

#### Other Tasks

* After adding new images to **/images**, run `$ gulp minify-images` to optimize them

## Developing Components

[to be written]

### Organization of Assets

Files directly related to components are contained in the folders below:

app
+-- css
    +-- _[component].scss
    +-- _mixins.scss
    +-- _resets.scss
    +-- _variables.scss
    +-- main.scss
+-- images
+-- jsx
    ++- components
        +-- [component.jsx]
    ++- display
        +-- [display.jsx]
    ++- layouts
        +-- [layout.jsx]
    ++- objects
        +-- [object.jsx]
+-- scss
    +-- [_component.scss]
### Best Practices

[to be written]
