
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

A simple example using the Well component:

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

The display folder contains files that each import a single component or object for rendering on a single page within the UI library, for reference. Occasionally, sample content is included for highlighting the proof of concept. These files are not included in the build process.

A simple display file using the Well component:

```javascript
// ##### Content Well Display ##### //

import React from 'react'
import WellComp from '../components/WellComp.jsx'

class WellDisp extends React.Component {
  render() {
    return (
      <div>
         <WellComp />
      </div>
    )
  }
}

module.exports = WellDisp;
```

#### Layouts ####

Layout files each render a single page that include many ojects, components, and sample content.

#### Objects ####

Objects are generally smaller pieces of the UI compared to components and are typically used in multiple places within components.

Object files are not typically imported into components directly; only their styles as Sass Placeholders (see [Authoring Styles](https://github.com/cdlib/eschol-ui#authoring-styles) below). This allows object files to contain a few iterations of the same element to highlight slightly different variations or styles, unlike components.

An example using the Text Link Object:

```javascript
import React from 'react'

class TextlinkObj extends React.Component {
  render() {
    return (
      <div>
        <div>
          <a href="" className="o-textlink__primary">Primary Link</a>
        </div>
        <div>
          <a href="" className="o-textlink__secondary">Secondary Link</a>
        </div>
        <div>
          <a href="" className="o-textlink__black">Black Link</a>
        </div>
        <div>
          <a href="" className="o-textlink__white">White Link</a>
        </div>
        <div>
          <a href="" className="o-textlink__left-icon">Left Icon Link</a>
        </div>
        <div>
          <a href="" className="o-textlink__external-link">External Link</a>
        </div>
        <div>
          <a href="" className="o-textlink__right-arrow">Right Arrow</a>
        </div>
      </div>
    )
  }
}

module.exports = TextlinkObj;
```

#### Styles ####

Sass files within the scss folder contain all component and object CSS. They include:

* **\_component.scss** or **\_object.scss** where the filename is named according to the component or object. There is only one component/object Sass file for each component/object. Note that there are no Sass files for layout files. Component CSS selectors are prepended with "c-", while object selectors use "o-".

* **\_utilities.scss** contain large chunks of styles that are included across many components and objects. They are written as Sass Placeholders and Mixins and are prepended with "u-".

* **\_variables.scss** contain global Sass variables used throughout components and objects. These variables generally represent small values - like colors and spacing - and not blocks of styles, as within utilities.scss.

* **main.scss** is where all Sass files get imported and compiled via Gulp. It also contains a short section of "global" styles. This is the only Sass file that is not prepended by an underscore.

See below for more information about authoring styles.

### Authoring Styles

Component CSS is constructed by nesting selectors
CSS selectors are constructed as CSS classes using a modified form of the [BEM method](https://css-tricks.com/bem-101). While BEM typically recommends the naming of all elements, elements within the UI library are sometimes not named. Instead, they are selected with a matching "type" selector, as long as they are child HTML elements within the component (see simple example below).

Child selectors are often nested within parent selectors using Sass nesting.

CSS declarations are often written "mobile first", where they get repeated and overridden at a breakpoint.

A simple example using the Well component, including a `screen2` breakpoint and a nested `a` type selector that selects all anchors within the component:

```scss
// ##### Content Well Component ##### //

.c-well {
  margin-bottom: $spacing-md;
  padding: $spacing-sm;
  background-color: $color-light-teal;

  @include bp(screen2) {
    padding: $spacing-md;
  }

  a {
    @extend %o-textlink__secondary;
  }

}
```

### Best Practices

* Write CSS selectors in the [BEM method](https://css-tricks.com/bem-101) to help keep styles scoped to each component and CSS specificity flat.

* Follow [this Sass style guide](https://css-tricks.com/sass-style-guide) when writing Sass.
