# Project Sweetie Pie

[Project Sweetie Pie](http://projectsweetiepie.org) is a community organization that supports urban agriculture and community efforts to promote local and healthy eating in the North Minneapolis neighborhoods.  The intent of this project is to develop an interactive story map application to display food resources in North Minneapolis, offering an engaging portal to give community members a voice in the story of their neighborhood.

## Setup Instructions

1. You'll need Node JS version, at least version 5. On macOS we suggest either nvm the node version manager or just `brew install node` if you use homebrew.
2. Once installed, install grunt: `npm install -g grunt-cli`
3. Install dependencies: `npm install`
4. Run grunt to build assets: `grunt`
5. Install postgres (in homebrew, `brew install postgres && brew services start postgres`)
6. Create the initial db: `createdb north-nile`

## Running in Development

Simply run: `npm start`

## Running in production

This is effectively the same, but right now this project runs on heroku.

## Current Contributors

* [Amy Jennings](https://github.com/amyjenningsmn)
* [Courtney Ives](https://github.com/courtneygives)
* [Libby London](https://github.com/libbylondon11)
* [Sasha Kramer](https://github.com/sasham43)
* [Travis Ingram](https://github.com/travisingram)

## MIT License

Copyright (c) 2017 Amy Jennings, Courtney Ives, Libby London, Sasha Kramer, and Travis Ingram

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
