function myFunction() {
	document.getElementById("ima").style.background = "rgba(80, 166, 225, 0.53)";
}

function fecha() {
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var f=new Date();
	var fecha = ("<font color='#1A6988' face='sans-serif' style='font-size:10pt;'>" + diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " " + f.getFullYear());
	return fecha;
}