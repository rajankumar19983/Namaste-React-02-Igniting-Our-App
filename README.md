# Namaste-React-02-Igniting-Our-App

### Here we will pbundle our code using parcel

First we created package.json with the command "npm init".
Then we include parcel with the command "npm install -D parcel", where -D means dev dependency.

### In package.json or package-lock.json, if we see version of something then

^ sign in front is known as caret and it will auto update to any minor version update available.
~ sign is known as tilde and will auto update to any major version update available.
If the above signs are not used, that means we strictly use a particular version.

```
package-lock.json will tell you what exact version of libraries are you using.
Never put package-lock.json into gitignore.
package-lock.json has enough information for recreating node modules, so we put node modules into gitignore.
```

We removed the react and react-dom CDNs and installed them using npm and run our code with command "npx parcel index.html" where index.html is the entry point.

We bundled our code using the command "npx parcel build index.html"

## --------------------ASSIGNMENT--------------------

### 1. What is NPM?

NPM is a package manager for the JavaScript programming language maintained by npm Inc. NPM is the default package manager for the JavaScript runtime environment 'Node.js'. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. It basically manages dependencies for our code.

##

### 2. What is Parcel/Webpack? Why do we need it?

Parcel and webpack are the bundlers used mostly for JavaScript or Typescript code that helps you to minify, clean, and make your code compact so that it becomes easier to send a request or receive the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application.
Along with that both bundlers parcel and webpack remove the unnecessary comments, new lines, any kind of block delimiters, and white spaces while the functionality of the code remains unchanged.

##

### 3. What is .parcel-cache?

cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

##

### 4. What is npx?

The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

##

### 5. What is the difference between dependencies and devDependencies?

Dependency is an object that contains the library, which your project requires for production environments and functioning effectively.
devDependencies are those packages in the package. json file that you need only for project development purposes.

##

### 6. What is Tree Shaking?

Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.
It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.
In modern JavaScript applications, we use module bundlers (e.g., webpack or Parcel) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.

##

### 7. What is Hot Module Replacement?

Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload. Save valuable development time by only updating what's changed.

##

### 8. List down you favourite 5 superpowers of parcel and describe any 3 of them in your own words.

```
1. Hot Module Replacement :- When you make a change, Parcel automatically updates your code in the browser – no page reload necessary!

2. Diagnostics :- If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.
Every error includes a syntax highlighted code frame pointing to the exact location where the error occurred, along with hints about how to fix the issue.
Many diagnostics even include a documentation link where you can learn more.

3. Tree shaking :- Parcel supports tree-shaking both ES modules and CommonJS out of the box! It statically analyzes the imports and exports of each module, and removes everything that isn't used.

4. Minification :- Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box! Just run parcel build index.html, and your whole application will be built and optimized automatically.

5. Content hashing :- Parcel automatically includes content hashes in the names of all output files. This enables long-term browser caching, because the output is guaranteed not to change unless the name does.
```

##

### 9. What is .gitignore? What should we add and not add into it?

The . gitignore file tells Git which files to ignore when committing your project to the GitHub repository. gitignore is located in the root directory of your repo.

Any file that can be re-created on the server (like node_modules, dist, large media files etc.) should be added to .gitignore.
Files like package.json, package-lock.json, our code files should not be added into .gitignore.

##

### 10. What is the difference between package.json and package-lock.json?

Package.json is a list of all the dependencies of a project (among other things) that need to be downloaded for the project. This includes version info for what needs to be downloaded.

The package.lock.json is generated from this, and lists the dependency tree that was generated after an npm install. This allows future devs and automated systems to download the exact same dependencies as the project. It also allows you to go “back in time” to past versions of the dependency tree without actually committing the node_modules folder.

##

### 11. Why should I not modify package-lock.json?

It is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. You should commit package-lock. json to your code repository.

##

### 12. What is node-modules? It is good idea to push that on git?

In simple terms, a module is a piece of reusable JavaScript code. It could be a .js file or a directory containing .js files. You can export the content of these files and use them in other files.

Modules help developers adhere to the DRY (Don't Repeat Yourself) principle in programming. They also help to break down complex logic into small, simple, and manageable chunks.

##

### 13. What is dist folder?

The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.

##

### 14. What are browserlists?

Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file.
