$(document).ready(start);

function start() {
  setTimeout(escondeLogo, 2000);
  setTimeout(muestraBotones, 2000);
  $(".btn-usuario").click(direccionaRegUsuario)
  $(".btn-driver").click(direccionaRegDriver)
}

function escondeLogo(){
  $(".index-logo-texto").hide();
}

function muestraBotones() {
  $('.index-btn-container').addClass("index-centerHV");
  Materialize.fadeInImage('.index-btn-container');
}

function direccionaRegUsuario() {
  window.location.assign("views/userSignUp.html")
}

function direccionaRegDriver() {
  window.location.assign("views/driverSignUp.html")
}
