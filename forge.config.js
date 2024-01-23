module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-vite",
      config: {
        // `build` puede especificar múltiples compilaciones de entrada, que pueden ser para el proceso principal, scripts de precarga, proceso de trabajadores, etc.
        // Si estás familiarizado con la configuración de Vite, te resultará muy familiar.
        build: [
          {
            // `entry` es simplemente un alias de `build.lib.entry` en el archivo correspondiente de `config`.
            entry: "src/main.js",
            config: "vite.main.config.mjs",
          },
          {
            entry: "src/preload.js",
            config: "vite.preload.config.mjs",
          },
        ],
        renderer: [
          {
            name: "main_window",
            config: "vite.renderer.config.mjs",
          },
        ],
      },
    },
  ],
};
