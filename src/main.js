import { app, BrowserWindow } from 'electron'
import path from 'path'
import { Sequelize } from 'sequelize'

const MAIN_WINDOW_VITE_DEV_SERVER_URL =
  process.env.MAIN_WINDOW_VITE_DEV_SERVER_URL || null

const MAIN_WINDOW_VITE_NAME = process.env.MAIN_WINDOW_VITE_NAME || null

// Manejar la creación/eliminación de accesos directos en Windows al instalar/desinstalar.
if (require('electron-squirrel-startup')) {
  app.quit()
}

const createWindow = () => {
  // Crear la ventana del navegador.
  const mainWindow = new BrowserWindow({
    minWidth: 1024,
    minHeight: 768,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: true,
    },
  })

  // y cargar el index.html de la aplicación.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL)
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
    )
  }

  // Abrir las herramientas de desarrollo.
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.DEBUG_PROD === 'true'
  ) {
    mainWindow.webContents.openDevTools()
  }
}

// Salir cuando todas las ventanas estén cerradas, excepto en macOS. Allí, es común
// que las aplicaciones y su barra de menús permanezcan activas hasta que el usuario salga
// explícitamente con Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Este método se llamará cuando Electron haya terminado
// la inicialización y esté listo para crear ventanas del navegador.
// Algunas API solo pueden usarse después de que ocurra este evento.
app
  .whenReady()
  .then(() => {
    createWindow()
    app.on('activate', () => {
      // En macOS es común volver a crear una ventana en la aplicación cuando
      // se hace clic en el icono del dock y no hay otras ventanas abiertas.
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
  })
  .catch(console.log)

// En este archivo puedes incluir el resto del código específico del proceso principal de tu aplicación
// También puedes ponerlos en archivos separados e importarlos aquí.
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'src/database.sqlite',
})

sequelize.sync({ force: false })
