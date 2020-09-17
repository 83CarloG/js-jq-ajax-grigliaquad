/*
Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato.
*/

$(document).ready(function	() {
	// evento click sul quadrato
	$('.col-2').click(function	() {
	// memorizzo il quadrato cliccato
		var square = $(this);
	// se è già giallo o verde non faccio nulla
	if (!(square.hasClass('yellow')) && !(square.hasClass('green')))
	// chiamata all'endpoint
		$.ajax({
			url: 'https://flynn.boolean.careers/exercises/api/random/int',
			type: 'GET',
			success: function (data, stato) {
				// memorizzo il dato che mi serve
				var randomNumber = data.response;
				// attribuisco la classe al quadrato
				if (data.response <= 5) {
					square.addClass('yellow');
					} else if (data.response > 5) {
						square.addClass('green');
					}
					// stampo il numero nel quadrato
					square.children('p').text(data.response);
				},
			error: function (richiesta, stato, errori) {
				alert('E\' avvenuto un\'errore' + errori)
			}
		});
	});
});
