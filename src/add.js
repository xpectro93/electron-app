const { remote, ipcRenderer} = require('electron');

console.log('we are getting to add.js')
const closeBtn = document.querySelector('#closeBtn');

closeBtn.addEventListener('click', () => {
    console.log('we are clicking')
    let win = remote.getCurrentWindow();
    win.close();
})