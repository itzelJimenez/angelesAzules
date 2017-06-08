(function(){

var $checkAngel = $('#test5');
var cargarPagina = function(){
	$('.modal').modal();
	$checkAngel.click(mostrarBtnSubir);
}
var validarCheck = function(){
	if($('#test5').checked = true){
		$('#contBtnSubir').removeClass('hide')
		} else {$('#contBtnSubir').addClass('hide')}
}
var mostrarBtnSubir = function(){
	if($('#test5').checked = true){
		$('#contBtnSubir').removeClass('hide')
		};
}
$(document).ready(cargarPagina);
}) ();
