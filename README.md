# eschol-ui

The eScholarship UI library.

**The UI Library is currently testing a proposed Gulp toolkit for React**

Work creating the UI components will begin shortly.

## Using the Gulp Toolkit

### Software Requirements

* [Node and npm](https://nodejs.org/en)

* [Bower](https://bower.io): `$ sudo npm install -g bower`

* [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md): `$ sudo npm install -g gulp-cli`

* [Ruby](https://www.ruby-lang.org/en/downloads) for the Sass lint plugin

### Toolkit Installation

1. Clone this repo and cd to its root directory on your machine

2. Run `$ npm install` to install Gulp plugins. Ignore the various "depreciated" warnings that appear.

3. Run `$ gem install scss_lint` for the Sass lint plugin.

4. Run `$ bower install` to install Bower libraries

### Running the Toolkit

* Cd to this repo's root directory

* Run `$ gulp hello` to confirm that the Gulp toolkit is installed

* While developing files in **/ui-library**, run `$ gulp` to watch live changes

* To minify images during development, run `$ gulp minify-images` after adding new, unoptimized images

* To update the custom modernizr file based off of classes found in CSS, run `$ gulp modernizr` after introducing new CSS features referenced in the [Modernizr development build](https://modernizr.com)

## To Dos

* Do we need to create "builds" with the toolkit?

* Would linting our JSX be a nice-to-have?
