$(document).ready(start);

function start() {
  setTimeout(escondeLogo, 2000);
  setTimeout(muestraBotones, 2000);
}

function escondeLogo(){
  $(".index-logo-texto").hide();
}

function muestraBotones() {
  $('.index-btn-container').addClass("index-centerHV");
  Materialize.fadeInImage('.index-btn-container');
}
