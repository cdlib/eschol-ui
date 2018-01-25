
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

## Getting Familiar with the Library's Assets

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

### Components

Components make up the largest gorup of UI pieces in the library. Each component is  distinct. They are not usually related to each other, except in a few cases where there is a React parent/child relationship. Changes to one component should not affect another. Except in rare cases, they are not mixed together.

Component files are named in Pascal case, starting with the component name, and ending with "Comp". For example, see the [Well Component](https://github.com/cdlib/eschol-ui/blob/master/app/jsx/components/WellComp.jsx).

### Display

The display folder contains files that each import a single component or object for rendering on a single page within the UI library, for reference. Occasionally, sample content is included for highlighting the proof of concept. These files are not included in the build process.

Display files are named in Pascal case, starting with the display name, and ending with "Disp". For example, see the [Checkbox Display](https://github.com/cdlib/eschol-ui/blob/master/app/jsx/display/CheckboxDisp.jsx).

### Layouts

Layout files each render a single page that include many ojects, components, and sample content.

Object files are named in Pascal case, starting with the layout name, and ending with "Layout". For example, see the [Home Layout](https://github.com/cdlib/eschol-ui/blob/master/app/jsx/layouts/HomeLayout.jsx).

### Objects

Objects are generally smaller pieces of the UI compared to components and are typically used in multiple places within components.

Object files are named in Pascal case, starting with the object name, and ending with "Obj". For example, see the [Text Link Object](https://github.com/cdlib/eschol-ui/blob/master/app/jsx/objects/TextlinkObj.jsx).

### Styles

Sass files within the scss folder contain all project CSS. They include:

* **\_component.scss** or **\_object.scss** where the filename is named according to the component or object. There is only one component/object Sass file for each component/object. Note that there are no Sass files for layout files.

* **\_utilities.scss** contain large chunks of styles that are included across many components and objects. They are written as Sass Placeholders and Mixins.

* **\_variables.scss** contain global Sass variables used throughout components and objects. These variables generally represent small values - like colors and spacing - and not blocks of styles, as within utilities.scss.

* **main.scss** is where all Sass files get imported and compiled via Gulp. It also contains a short section of "global" styles. This is the only Sass file that is not prepended by an underscore.

See below for more information about authoring styles.

## How Styles are Constructed

For basic CSS concepts, please see [CSS Syntax and Selectors](https://www.w3schools.com/css/css_syntax.asp).

### Naming Styles

CSS selectors in this UI library are named using the [BEM method](https://css-tricks.com/bem-101). With BEM, CSS selectors are written as classes and named as blocks, elements, and modifiers. In the UI library, components and objects always feature a BEM block, while BEM elements and modifiers may be optional.

In the UI library, the block is named after the object, component, or utility and is prepended with either a `-c`, `-o`, or `-u` to designate it as such.

Here is a plain example of a component named "flower" with BEM:

```scss

.c-flower {
  property: value;
}

.c-flower__element {
  property: value;
}

.c-flower__element--modifier {
  property: value;
}
```

### Nesting Styles

Selectors in this UI library often contain nested parts - [a feature of Sass](http://sass-lang.com/guide#topic-3).

#### Media Query Rules

The most common nested parts are media query rules, which allow changes to component/object styles at certain screen widths for responsive design. These "breakpoints" are written as [Sass mixins](https://github.com/cdlib/eschol-ui#sass-mixins) and include Sass variables, such as `screen1`, `screen2`, `screen3`, which define the screen size.

Media query rules are organized in a "mobile-first" fashion, in that each one in the CSS declaration adds to or overrides the CSS written above it.

For example, with the "flower" component, the background is initially rendered as green on a small screen, then changes color to yellow, then red as the screen size gets wider:

```scss

.c-flower {
  background: green;

  @include bp(screen1) {
    background: yellow;
  }

  @include bp(screen2) {
    background: red;
  }

}
```

#### CSS Combinators

The other common set of nested parts are [CSS combinators](https://www.w3schools.com/css/css_combinators.asp). These selectors typically target specific HTML elements within the component/object.

For example, the nested `a` in the flower component will render all links within the component as blue:

```scss

.c-flower {
  background: green;

  @include bp(screen1) {
    background: yellow;
  }

  @include bp(screen2) {
    background: red;
  }

  a {
    color: blue;
  }

}
```

Other, less-common nested parts in the UI library include [pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp) and [pseudo-elements](https://www.w3schools.com/css/css_pseudo_elements.asp).

### Chunks of Common Styles

Components and objects frequently have chunks of common styles used within them. This is made possible by Sass placeholders and mixins.

#### Sass Placeholders

A Sass placeholder looks like a normal CSS class, except that it starts with a percent sign instead of a period, like this: `%c-block`. It gets applied to regular, class-based selectors by using the Sass directive `@extend` with the name of the placeholder class.

For example, `%c-flower` is the placeholder and its background style gets applied to `.c-flower__pedals`:

```scss
%c-flower {
  background: red;
}

.c-flower__pedals {
  @extend: %c-flower;
}
```

Placeholders are especially common in UI library object CSS. Within a single object, multiple placeholders are often defined, so that their various styles can be extended out to other component CSS. Sometimes, a placeholder will extend another set of placeholders. For example:

```scss
%o-objects {
  margin: 15px;
}

%o-object__number-1 {
  @extend: %o-objects;
  background: red;
}

.o-object__number-1 {
  @extend: %o-object__number-1;
}

%o-object__number-2 {
  @extend: %o-objects;
  background: blue;
}

.o-object__number-2 {
  @extend: %o-object__number-2;
}
```

This would produce two placeholder classes - `%o-object__number-1` and `%o-object__number-2` - that both contain 15 pixels of margin and either a red or blue background, depending on the placeholder.

If we wanted to apply the object styles of `%o-object__number-2` within a component, that could look like this:

```scss
.c-flower__element {
  @extend: %o-object__number-2;
  font-weight: bold;
}
```

This would produce a class `.c-flower__element` with 15 pixels of margin, a blue background, and a bold font.

For a real-world example of this pattern, see the [Text Link object Sass](https://github.com/cdlib/eschol-ui/blob/master/app/scss/_textlink.scss).

#### Sass Mixins

Sass mixins are similar as placeholders - they contain one or more CSS declarations that can get applied in many places in the UI. However, mixins are written a bit differently, like this:

```scss
@mixin flower() {
  background: red;
}

.c-flower__pedals {
  @include flower();
}
```

The most common application of mixins in the UI library are [media query rules](https://github.com/cdlib/eschol-ui#media-query-rules).

Mixins typically contain complex CSS declarations, sass variables, and logic for compilation. They are used sparingly and mostly appear in [**\_utilities.scss**].

## Updating an Elements's HTML or Styles

The component, `c-subheader` will be used as an example.

1. [Run](https://github.com/cdlib/eschol-ui#running-the-toolkit) the UI library toolkit.
2. Browse to the eScholarship display page containing the subheader element.
3. In the UI library, open the **jsx** and **scss** files related to the subheader component. By understanding the file naming conventions [listed here](https://github.com/cdlib/eschol-ui#getting-familiar-with-the-librarys-assets), these two files will be **SubHeaderComp.jsx** and **\_subheader.scss**
4. Update the HTML within **SubHeaderComp.jsx** and/or update the styles within **\_subheader.scss**
5. Save your changes and review them on the display page as they are automatically applied.
6. If everything looks good, commit your changes to the repo and create a [finished build](https://github.com/cdlib/eschol-ui#running-the-toolkit).
7. Pull the commited UI library changes and reintegrate the UI library changes within jSchol.

## Integrating UI Library Updates into jSchol Project

[this needs review by the jSchol team]

1. Pull any updated UI library CSS from the eschol-ui repo.
2. Copy and paste UI library element HTML into jSchol templates and view changes in local server [or via jSchol dev server?]
3. Verify that there are no integration errors by visualy diffing the layout between the UI library and jSchol dev server in the four browsers officially supported by the project:
...* Chrome (latest version)
...* Firefox (latest version)
...* Internet Explorer 11 (via CrossBrowserTesting.com)
...* Safari (latest version)

## Troubleshooting Elements in Layouts

When elements are not rendering properly in layouts, begin troubleshooting by following these steps:

1. Browse to the eScholarship layout page containing the rendering issues.
2. Open your browser's developer tools.
3. Using the inspector tool, highlight the element's problematic HTML.

[more to come]

## Best Practices

* Write CSS selectors in the [BEM method](https://css-tricks.com/bem-101) to help keep styles scoped to each component and CSS specificity flat.

* Follow [this Sass style guide](https://css-tricks.com/sass-style-guide) when writing Sass.
