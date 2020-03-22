const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;

console.log('Index.js connected')
const notifyBtn = document.querySelector('#notifyBtn');

notifyBtn.addEventListener('click', e => {
    // window properties.  
        //frame disables the menu options on top
    let win = new BrowserWindow({ frame: false, transparent:true, alwaysOnTop:true, width:400, height:300 });

    //when window close x is closed window closes;
    win.on('close', ()=> win = null);

    //create new window
    win.loadFile('./src/add.html');
    win.show()

})