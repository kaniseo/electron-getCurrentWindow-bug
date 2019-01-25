const { remote } = require('electron');
document.addEventListener('DOMContentLoaded', () => {
    console.log(remote.getCurrentWindow());
    document.getElementById('container').innerHTML = remote.getCurrentWindow()
});