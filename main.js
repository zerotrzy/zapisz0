const { app, dialog, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    nodeIntegration: true
//    webPreferences { worldSafeExecuteJavaScript: true }
  })

  win.loadFile('index.html')
  // tylko chwilowo
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

//app.on('ready', function () {
//  dialog.showOpenDialog({
//    properties: ['openFile', 'multiSelections']
//  });
//});
