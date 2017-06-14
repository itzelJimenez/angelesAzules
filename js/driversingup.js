(function(){
var $logFacebook = $('#test1');
var $checkAngel = $('#test5');
var $btnFB = $('.fb-login-button');
var cargarPagina = function(){
	$('.modal').modal();
	$checkAngel.click(mostrarBtnSubir);
	$logFacebook.click(logFB);
}

var logFB = function () {
	console.log(this)
	if($('#test1').checked = true){
		$btnFB.removeClass('hide');
		$('#form-registro').addClass('hide');
		} else {$btnFB.addClass('hide')}
}


var validarCheck = function(){
	if($('#test5').checked = true){
		$('#contBtnSubir').removeClass('hide');
		} else {$('#contBtnSubir').addClass('hide')}
}
var mostrarBtnSubir = function(){
	if($('#test5').checked = true){
		$('#contBtnSubir').removeClass('hide')
		};
}
$(document).ready(cargarPagina);
}) ();