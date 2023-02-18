/*
*
* Created a server
* HMR - Hot Module Replacement
* File Watcher Algorithm - C++
* BUNDLING
* MINIFICATION
* Cleaning our code
* Dev and Production build
* Super fast build algorithm
* Image optimization
* Caching while development
* Compression
* Compatible with older version of browser
* HTTPS on dev
* posr number
* Consistent Hashing Algorithm
* Zero config
*
*/



import React from "react";
import ReactDOM from "react-dom/client";

// creating a heading of type h1, with some props and some textContent
const heading = React.createElement(
  "h1",
  {
    id: "message"
  },
  "Namaste Everyone from React"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "message"
  },
  "This is Heading2"
);

// This is how we insert multiple elements into root element
const container = React.createElement(
  "div",
  {
    id: "container"
  },
  [heading, heading2]
);

// createRoot takes the HTML element where we are going to run our React code
const root = ReactDOM.createRoot(document.getElementById("root"));

//render method with overwrite everything present inside the root element if present
root.render(container);