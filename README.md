
#The eScholarship UI Library

This contains all UI elements for the eScholarship JSX redesign or ['jschol'](https://github.com/eScholarship/jschol) project. It uses a Gulp-based build toolkit for development, including a Sass plugin to compile SCSS to CSS.

## Using the Gulp Toolkit

### Software Requirements

* [Node and npm](https://nodejs.org/en)

* [Bower](https://bower.io): `$ sudo npm install -g bower`

* [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md): `$ sudo npm install -g gulp-cli`

### Toolkit Installation

1. Clone this repo and cd to its root directory on your machine

2. Run `$ npm install` to install Gulp plugins. Ignore the various "depreciated" warnings that appear.

3. Run `$ bower install` to install Bower libraries

### Running the Toolkit

* Cd to this repo's root directory

* Run `$ gulp hello` to confirm that the Gulp toolkit is installed

* While developing files in **/app**, run `$ gulp` to watch live changes

* To minify images during development, run `$ gulp minify-images` after adding new, unoptimized images

* To create a finished build of the UI Library, run `$ gulp build`

* To publish a finished build of the library to GitHub Pages, run `$ gulp deploy`. It will publish to [https://cdlib.github.io/eschol-ui](https://cdlib.github.io/eschol-ui)
