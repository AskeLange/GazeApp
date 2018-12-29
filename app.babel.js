

// Import n' global window object
const { app, BrowserWindow } = require ('electron');
let _window = null;

// Methods
// New window
let new_window = (( options={}, file='./index.html' ) => {

  // Required parameters
  options = Object.assign ({ 
    width: 800, height: 600
  }, options);

  // Inits window n' loads file
  let window = new BrowserWindow (options);
  window.webContents.openDevTools ( );
  return (window.loadFile (file), window);

});

// App events
// App on ready
app.on ('ready', e => {
  if (!_window) _window = new_window ({ frame: false });
  _window.on ('close', e => { _window = null; });
});

// App on activate
app.on ('activate', e => {
  if (!_window) _window = new_window ({ frame: false });
  _window.on ('close', e => { _window = null; });
});

// App on all windows closed
app.on ('window-all-closed', e => {
  if (process.platform != 'darwin') app.quit ();
});

