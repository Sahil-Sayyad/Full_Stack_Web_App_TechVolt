## TechVolt Full Stack Web App

## Description

- This React application is built using [vite](https://vitejs.dev).
- It Uses [Tailwind CSS](https://tailwindcss.com/).
- The application uses node.js as backend.

## Pre-requisites

- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJs](https://nodejs.org/en/) -v16 or greater
- [npm](https://www.npmjs.com/) -v6 or greater

## Running in dev environment

1. `cd your_application`
2. `npm install`
3. `npm run dev`

## .env file

this file contains various environment variables that you can configure.

## Folder Structure

```  
 ── public
    ├── assets
    │   ├── images ----- All Project Images
    │   └── fonts ------ Project fonts
    ├── favicon.ico
    
 ── src
    ├── components ------- UI and Detected Common Components
    ├── constants -------- Project constants
    ├── hooks ------------ Helpful Hooks
    ├── pages ------------ All route pages
    ├── styles
    │   ├── index.css ----- Other Global Styles
    │   └── tailwind.css --- Default Tailwind modules
    ├── App.jsx
    ├── main.jsx
    ├── Routes.jsx -------- Routing
    └── util
        └── index.jsx ----- Helpful utils

  ── index.html
  ── postcss.config.js
  ── package.json
  ── README.md
  ── vite.config.js
  ── tailwind.config.js ------------------------------ Entire theme config, colors, fonts etc.
```
For the project to build, **these files must exist with exact filenames**

* index.html is the page template;
* src/main.jsx is the JavaScript entry point.

You may create subdirectories inside src.
