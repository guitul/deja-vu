# Déjà Vu - Web Client
## Your Bookmarks in the Cloud

Déjà Vu is a Bookmark Manager. It aims to be dead simple for you to use. Once logged in, you will be able to:
* Easily browse your own bookmarks;
* Add a new bookmark by copy/pasting a given URL;
* Edit/Tag/Describe/Remove an existing bookmark;
* Organize your bookmarks by tags/categories/folders;
* Quickly search your own bookmarks;
* Share a bookmark with friends;
* Discover new interesting bookmarks;
* Import/Export bookmarks with standard browsers.

Check out the [live demo](http://guitul.github.io/dejavu-web/)!

## Projects
Déjà Vu consists of 3 different projects:
* [Déjà Vu - Web Client](https://github.com/guitul/dejavu-web)
* [Déjà Vu - Hybrid Client](https://github.com/guitul/dejavu-hybrid)
* [Déjà Vu - REST Server](https://github.com/guitul/dejavu-server)

## Usage
### Requirements
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [Bower](http://bower.io)
* [Gulp](http://gulpjs.com)

### Installation
1. Clone the repository: `git clone https://github.com/guitul/dejavu-web.git`
2. Install the NodeJS dependencies: `npm install`.
3. Install the Bower dependencies: `bower install`.
4. Run the gulp build task: `gulp build`.
5. Run the gulp default task: `gulp`. This will build any changes made automatically, and also run a live reload server on [http://localhost:8888](http://localhost:8888).

Ensure your preferred web server points towards the `dist` directory.

### Development
Déjà Vu is based on the [Responsive Dashboard](https://github.com/rdash) project by [Elliot Hesp](https://github.com/Ehesp).
Please keep in mind that for the time being lots of features are not yet implemented:
* User authentication
* Link target parsing
* Custom categories management
* Tags management
* Sharing capability
* Import/Export with standard browsers
