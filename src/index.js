const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow;

console.log('Index.js connected')
const notifyBtn = document.querySelector('#notifyBtn');

notifyBtn.addEventListener('click', e => {
    console.log('this is path =>', path)
    const modalPath = path.join('file://', __dirname, 'add.html');
    let win = new BrowserWindow({ width:400, height:200 });


    win.on('close', ()=> win = null);
    win.loadURL(modalPath)
    win.show()

})