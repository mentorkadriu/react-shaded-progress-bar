## Shaded Progress Bar

A React component inspired from codedrops articles and `https://github.com/codrops/CSSProgress`

## Installation

`npm install @mentorkadriu/shaded-progress-bar`

## Adding custom colors

Create a sass file on your source folder `custom-style.scss` and import `_settings.scss` and `_build-skin.scss` files:
Custom skin should have name `custom` so typescript does not show any error.

```sass
@import "scss/settings";
@import "scss/build-skin";

$green: #00ff00;

.bar {
  @include build-skin($green, "custom");
}
```

## Build process

In order to build the docs change `package.json`:

```diff
  + "source": "./index.html",
  - "source": "./index.ts",
  - "main": "dist/main.js",
  - "module": "dist/module.js",
  - "types": "dist/index.d.ts",
```
And then run `npm run build:docs`

To build the components change `package.json`:

```diff
  - "source": "./index.html",
  + "source": "./index.ts",
  + "main": "dist/main.js",
  + "module": "dist/module.js",
  + "types": "dist/index.d.ts",
```
And then run `npm run build:component`
