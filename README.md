

## To Reproduce

To clone this repo with git and make sure you have node.js installed on your machine.
I am currently running 8.7.0 with this build

```bash
# Clone this repository
git clone https://github.com/kaniseo/electron-getCurrentWindow-bug.git
# Go into the repository
cd electron-getCurrentWindow-bug
# Install dependencies
npm install
# Run the app
npm start
```
Notice that remote.getCurrentWindow() inside the webview-preload.js returns null (console.log out puts null)

Now go to package.json and update the electron version to 3.0.2

```bash
# Clean the node_modules
rm -rf node-modules
# Install dependencies for the electron 3.0.2
npm install
# Run the app
npm start
```
Now you will see that the remote.getCurrentWindow() inside the webview-preload.js returns an object with the BrowserWindow options

This seems to be a bug with the new Electron 4.

