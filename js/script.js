/*
Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato.
*/
$(document).ready(function	() {
	function callRandomNumber () {
		$.ajax({
		url: 'https://flynn.boolean.careers/exercises/api/random/int',
		type: 'GET',
		success: function (data, stato) {
			var number = data.response;
			return number;
		},
		error: function (richiesta, stato, errore) {
			alert('E\' avvenuto un errore' + errore);
		}
	});
	}

	var square = $('.col-2');
	$(this).click(function	() {
		var pippo = callRandomNumber();
		// perchè pippo non mi dA IL VALORE DI DATA.RESPONSE
		console.log(pippo);
	});
});


// TEMPLATE
// 	// Getto il mio template
// 	var source = $('#entry-template').html();
// 	// Lo compilo
// 	var template = Handlebars.compile(source);
// 	// Inserisco un contenuto
// 	var context = {
// 		//
// 	};
// 	// Aggancio il contenuto al template
// 	var html = template(context);
// 	// Lo innietto nell'html
// 	var app = $('#app').append(html);
// });
