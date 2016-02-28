var tablica = $('#tablica');

$('#kreiraj').click(function () {
	$('.polje').remove();
	var redak = $('#broj_redaka').val();
	var stupac = $('#broj_stupaca').val();
	var ukupno = redak * stupac;
	
	for (var i = 0; i < ukupno; i++) {
		tablica.append($('<div />').addClass('polje').addClass('polje-' + (i)));
		if ('.polje-' + (ukupno-1)) {
			$('.polje-' + (ukupno-1)).css({"background" : "#565d6b" , "color" : "#ffffff"});
		}
	}
	
	var n = 0;
	for (y = 0; y < redak; y++) {
		for (x = 0; x < stupac; x++) {
			$('.polje-' + n, tablica).css({top: y * 100 , left: x * 100});
			++n;
		}
	}

	$('.polje', tablica).css({'opacity': 0});

	var poredak = new Array();
	
	var redak2 = redak/2, x, y, z, n=0;
	for (z = 0; z < redak2; z++){
		
		y = redak - z-1;
		for (x = stupac - z - 1; x > z; x--) {
		poredak[n++] = y * stupac + x;
		}
		
		x = z;
		for (y = redak - z - 1; y > z; y--) {
		poredak[n++] = y * stupac + x;
		}
		
		y = z;
		for (x = z; x < stupac - z-1; x++) {
		poredak[n++] = y * stupac + x;
		}
		
		x = stupac - z-1;
		for (y = z; y < redak - z - 1; y++) {
		poredak[n++] = y * stupac + x;
		}
	}		
	
	if (ukupno%2==0){
		for (var m = 1; m <= ukupno; m++) {
			$('.polje-' + poredak[m-1], tablica).append(m).delay(100*m).animate({opacity: 1});
		}
	}
	
	else {
		for (var m = 1; m <= ukupno; m++) {
			$('.polje-' + poredak[m-1], tablica).append(m).delay(100*m).animate({opacity: 1});	
		}
		if (redak==stupac) {
			$('.polje-' + ((ukupno/2)-0.5), tablica).append(ukupno).delay(100*m).animate({opacity: 1});
		}
	}
});