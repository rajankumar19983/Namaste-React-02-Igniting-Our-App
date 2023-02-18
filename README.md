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
