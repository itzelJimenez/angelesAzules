var cargarPagina = function () {
	$("#validate-user").submit(validarUsuario);
}

var validarUsuario = function (e) {
	e.preventDefault();
	var usuario = $("#icon_prefix").val().toLowerCase();
	var contraseña =$("#icon_password").val();
	if (usuario == "nallelyht" && contraseña =="122187"){
		location.href ="userService.html" 
	} else {
		swal("Error", "Escribiste mal tu usuario o contraseña", "error")
	}
}
$(document).ready(cargarPagina);