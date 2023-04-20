# Photographer's personal website

Demo: https://ruslkan.github.io/photographer/

The template has a Gulp-based build system with the following features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript module bundling with webpack
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (Version 8 or greater recommended, tested with 8.11.4 and 14.15.0)
- [Git](https://git-scm.com/)

This template can be installed with the Foundation CLI, or downloaded and set up manually.

### Using the CLI

Install the Foundation CLI with this command:

```bash
npm install foundation-cli --global
```

Now cd to your project name and to start your project run:

```bash
foundation watch
```

### Manual Setup

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
npm i
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.


### License

Photographer is an open source project that is licensed under MIT.
