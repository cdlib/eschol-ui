
# The eScholarship UI Library

This repository contains all UI elements for the eScholarship website. It serves as a proof of concept for demonstrating the UI apart from its integration into the [main eScholarship project](https://github.com/eScholarship/jschol). It is built upon the React framework and developed using a customized Gulp toolkit.

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

## Developing UI Elements

### Library Assets

Within this repository, the files and folders directly related to creating and maintaining UI elements are listed below. All other files and folders can be ignored:

```
app
├── images
├── jsx
|   ├── components
|   |   └── [component].jsx
|   ├── display
|   |   └── [display].jsx
|   ├── layouts
|   |   └── [layout].jsx
|   └── objects
|       └── [object].jsx
└── scss
    ├── _[component or object].scss
    ├── _mixins.scss
    ├── _variables.scss
    └── main.scss
```

#### Components ####

Components are distinct pieces of the UI. They are not related to each other, except in a few cases where there is a React parent/child relationship. Changes to one component should not affect another. Except in rare cases, they are not mixed together.

A simple component example:

```javascript
// ##### Content Well Component ##### //

import React from 'react'

class WellComp extends React.Component {
  render() {
    return (
      <div className="c-well">
        Here is the well component. <a href="">Lorem ipsum dolor sit amet</a>, consectetur adipisicing elit. Totam delectus adipisci quis dicta consectetur, nesciunt quam, amet soluta.
      </div>
    )
  }
}

module.exports = WellComp;
```

#### Display ####

The display folder contains files that each render a single component or object on a single page within the UI library for reference. Occasionally, sample content is included for highlighting the proof of concept. These files are not included in the build process.

#### Layouts ####

Layout files each render a single page of included ojects, components, and sample content.

#### Objects ####

Objects are generally smaller pieces of the UI compared to components and are typically used in multiple places within components.

#### Styles ####

Sass files within the scss folder contain all component and object CSS. They include:

* **\_component.scss** or **\_object.scss** where the filename is named according to the component or object. There is only one component/object Sass file for each component/object. Note that there are no Sass files for layout files.

* **\_mixins.scss** contain large chunks of styles that are included across many components and objects. They are typically written as Sass Placeholders and Mixins.

* **\_variables.scss** contain global Sass variables used throughout components and objects. These variables generally represent small values - like colors and spacing - and not blocks of styles, as within mixins.scss.

* **main.scss** is where all Sass files get imported and compiled via Gulp. It also contains a very short section of "global" styles. This is the only Sass file that is not prepended by an underscore.

### Best Practices

[to be written]
