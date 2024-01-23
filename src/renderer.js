/**
 * Este archivo será cargado automáticamente por Vite y se ejecutará en el contexto "renderer".
 * Para obtener más información sobre las diferencias entre los contextos "main" y "renderer" en
 * Electron, visita:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * De forma predeterminada, la integración de Node.js está desactivada en este archivo. Al habilitar
 * la integración de Node.js en un proceso "renderer", ten en cuenta las posibles implicaciones de seguridad.
 * Puedes obtener más información sobre los riesgos de seguridad aquí:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * Para habilitar la integración de Node.js en este archivo, abre `main.js` y activa la bandera `nodeIntegration`:
 *
 * ```
 *  // Crea la ventana del navegador.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import '@/index.css'
import '@/index.jsx'
