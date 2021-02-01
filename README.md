[![CI Badge](https://github.com/Brightspace/d2l-activity-exemptions/workflows/CI/badge.svg)](https://github.com/Brightspace/d2l-activity-exemptions/actions?query=workflow%3ACI)
[![Release Badge](https://github.com/Brightspace/d2l-activity-exemptions/workflows/release/badge.svg)](https://github.com/Brightspace/d2l-activity-exemptions/actions?query=workflow%3Arelease)

# \<d2l-activity-exemptions\>

Activity exemptions component

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

## Versioning & Releasing

All version changes should obey [semantic versioning](https://semver.org/) rules.

Include either `[increment major]`, `[increment minor]` or `[increment patch]` in your merge commit message to automatically increment the `package.json` version and create a tag during the next build.
