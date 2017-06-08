	function cargarPagina(){	
	alertCodigo();
	var $codigo=$("input").val();

	$("#formulario").submit(validar);
	$("#validar").click(validar);
	function validar(e){
		e.preventDefault();
		if($("input").val().length < 1 || $("input").val().length< 4 || $("input").val().length > 4){
			console.log($("input").val().length);
		alert("ingresa un código valido");

		}
		else if ($("input").val() == "4322"){
			alert("Código correcto");
			location.href = "driverService.html";
		}
	}
	function alertCodigo () {
		alert("tu codigo es 4322");
	}
};
$(document).ready(cargarPagina);