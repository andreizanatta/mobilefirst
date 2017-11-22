$(document).ready(function (){
	$('.menu-icon').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('menu-active');
	});
});
var click = document.getElementById('botao');
click.addEventListener('click', fnOK);

function fnOK() {
	alert('Teste JavaScript');
}
function validarNumero(){
	var num = document.getElementById('numero').value;
	if(isNaN(num) || num >= 1 &&  num <= 10){
		alert('input inválido! Número não pode estar entre 1 e 10');
	}else{
		alert('input válido!');
	}
}