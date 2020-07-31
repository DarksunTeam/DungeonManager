const {remote} = require('electron')

document.getElementById('minimizeButton').addEventListener('click', minimizeWindow)
document.getElementById('maximizeButton').addEventListener('click', maximizeWindow)
document.getElementById('closeButton').addEventListener('click', closeWindow)

function minimizeWindow( ) {
  var window = remote.getCurrentWindow( )
  window.minimize( )
}

function maximizeWindow( ) {
  var window = remote.getCurrentWindow( )
  window.isMaximized() ? window.unmaximize( ) : window.maximize( )
  $(this).find("i").removeClass('far fa-window-maximize').addClass('far fa-window-maximize')
}

function closeWindow( ) {
  var window = remote.getCurrentWindow( )
  window.close( )
}
