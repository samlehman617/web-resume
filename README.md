<div align="center">
  <a href="https://github.com/samlehman617/web-resume" title="Web Resume">
    <img alt="Web Resume" src="https://github.com/samlehman617/web-resume/raw/master/screenshot.png" width="200px" height="200px" />
  </a>
  <br />
  <h1>Web Resume</h1>
</div>

<p align="center">
  Single Page Web Application for CVs in <a href="https://reactjs.org">React</a>
</p>

<div align="center">
  <a href="https://travis-ci.com/samlehman617/web-resume">
    <img alt="Build Status" src="https://travis-ci.com/samlehman617/web-resume.svg?branch=master" />
  </a>
  <a href="https://resume.samlehman.me">
    <img alt="Example Resume" src="https://img.shields.io/badge/cv-demo-green.svg" />
  </a>
  <a href="https://opensource.org/licenses/mit-license.php">
    <img alt="MIT Licence" src="https://badges.frapsoft.com/os/mit/mit.svg?v=103" />
  </a>
  <a href="https://samlehman.me/web-resume">
    <img alt="Hits" src="http://hits.dwyl.io/samlehman617/samlehman617/web-resume.svg" />
  </a>
</div>

<br />

**Web Resume** is a single page web application for your **Résumé**. All you need to do is to write your data in `cv.json` and run the project. This project uses [React](https://reactjs.org) for the frontend, and [Babel](https://babeljs.io) and [Webpack](https://webpack.js.org) to transpile and bundle the app into a single page web application.



## Usage

### Setup

From the command line, run
```bash
$ git clone https://github.com/samlehman617/web-resume
$ cd web-resume
$ npm install
```
to install dependencies to setup the project.


### Build

To build the project (to the `dist` dir), simply run
```bash
$ npm run build
```
from inside the project.


### Run server

To run a local server, simply run
```bash
$ npm start
```
from inside the project.


### Deploy to GitHub Pages

To use GitHub pages to host the SPA, create your own repo to host the project, enable Pages for the repo, and run
```bash
$ npm run deploy
```
from inside project, and follow the CLI instructions. The deployed project can be viewed at `https://{your username}.github.io/{repo name}`. To use a custom domain name, create a file `CNAME` in the `dist` directory containing your domain name.


### Edit Data

To make this project your own, simply edit `cv.json` to reflect the data that would appear on your resume/CV. Changes will be reflected in the web app upon save. Please be sure to remove all information connected to [me](https://github.com/samlehman617) before hosting publicly.


## License

[MIT](https://github.com/samlehman617/web-resume/blob/master/LICENSE) © [Sam Lehman](https://samlehman.me)
