const { app, BrowserWindow, Menu, shell } = require('electron');

let  win;

function createWindow () {
  // Create the browser window.
   win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('./src/index.html')

  // Open the DevTools.
  win.webContents.openDevTools();

  //create menu
  let menu = Menu.buildFromTemplate([
    {
        label:'Menu',
        submenu: [
            { label: 'Adjust Notification Value'},
            { 
              label: 'CoinMarketCap',
              click() {
                  //on click will open new window on browser
                  shell.openExternal('http://youtube.com')}
            },
            //creates a line to separate options in menu
            { type : 'separator'},
            { 
              label: 'Exit',
              //on click will close the app
              click () { app.quit() }
            },

        ]
    }
    //creating another object here will create another menu
  ])
  //set menu
  Menu.setApplicationMenu(menu);

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }



})




app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.