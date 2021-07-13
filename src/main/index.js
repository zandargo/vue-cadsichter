import { app, BrowserWindow, ipcMain } from 'electron'

import store from '../renderer/store/index'

import variables from '../renderer/index.scss'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
	global.__static = require('path')
		.join(__dirname, '/static')
		.replace(/\\/g, '\\\\')
}

let mainWindow
const winURL =
	process.env.NODE_ENV === 'development'
		? `http://localhost:9080`
		: `file://${__dirname}/index.html`

function createWindow() {
	/**
	 * Initial window options
	 */
	mainWindow = new BrowserWindow({
		height: 563,
		width: 1500,
		minWidth: 600,
		minHeight: 400,
		backgroundColor: '#333333',
		frame: false,
		transparent: true,
		// backgroundColor: variables.backgroundColor,
		// backgroundColor: '#000000',
		useContentSize: true,
		icon: `${__dirname}/icons/eGPF1.png`,
		webPreferences: {
			devTools: false,
			// nodeIntegration: true,
			// enablemotemodule: true,
		},
	})

	mainWindow.loadURL(winURL)

	mainWindow.setBackgroundColor(variables.backgroundColor)

	mainWindow.on('closed', () => {
		mainWindow = null
	})
}

app.on('ready', createWindow)

ipcMain.on('qDev', (event, arg) => {
	isDev
		? mainWindow.webContents.send('init', 'isDev')
		: mainWindow.webContents.send('init', 'notDev')
})

ipcMain.on('winMinimize', () => {
	mainWindow.minimize()
	store.state.MainWindow.winStatus = 'minimized'
})
ipcMain.on('winMaximize', () => {
	mainWindow.maximize()
	store.state.MainWindow.winStatus = 'maximized'
})
ipcMain.on('winRestore', () => {
	mainWindow.restore()
	store.state.MainWindow.winStatus = 'normal'
	mainWindow.setSize(500, 600)
})
ipcMain.on('winClose', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('winMinimize', () => {
	console.log('Minimized')
})

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow()
	}
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
