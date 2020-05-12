let num = 0;
let robot = $('#robot')
let res = $('#res')
// Amélioration bras
let abras = $('#abras')
let pbras = $('#pbras')
let bras = 1
let bras1 = $('#bras1')
let bras2 = $('#bras2')
let bras3 = $('#bras3')
let bras4 = $('#bras4')
let bras5 = $('#bras5')
let bras6 = $('#bras6')
let bras7 = $('#bras7')
let bras8 = $('#bras8')
let bras9 = $('#bras9')
let prixbras = 40;

// Amélioration pack (IDLE)
let pack = 1;
let apack = $('#apack')
let ppack = $('#ppack')
let prixpack = 500;
let pack1 = $('#pack1')
let pack2 = $('#pack2')
let pack3 = $('#pack3')
let pack4 = $('#pack4')
let pack5 = $('#pack5')
let pack6 = $('#pack6')
let pack7 = $('#pack7')
let pack8 = $('#pack8')
let pack9 = $('#pack9')


pbras.html( "Amélioration Bras Cybernétique : " + prixbras);
ppack.html( "Robot pack : " + prixpack);

robot.on('click',function() {
	num ++;
	if (bras>1) {
		for (let i = 0 ; i<bras; i++) {
			num+= bras;
		}
	}
	res.html(num + "pièces");
})

abras.on('click',function () {
	if (num>=prixbras) {
		num -=prixbras;
		res.html(num + "pièces");
		bras ++;
		prixbras = prixbras * bras;
		pbras.html( "Amélioration Bras Cybernétique : " + prixbras);

		if (bras == 2) { bras1.css("visibility", "visible");}
		if (bras == 3) { bras2.css("visibility", "visible");}
		if (bras == 4) { bras3.css("visibility", "visible");}
		if (bras == 5) { bras4.css("visibility", "visible");}
		if (bras == 6) { bras5.css("visibility", "visible");}
		if (bras == 7) { bras6.css("visibility", "visible");}
		if (bras == 8) { bras7.css("visibility", "visible");}
		if (bras == 9) { bras8.css("visibility", "visible");}
		if (bras == 10) { bras9.css("visibility", "visible");}

	}
})


apack.on('click',function () {
	if (num>=prixpack) {
		clearInterval()
		num -=prixpack;
		res.html(num + "pièces");
		pack ++;
		prixpack = prixpack * bras;
		ppack.html( "Robot pack : " + prixpack);

		if (pack == 2) { pack1.css("visibility", "visible");}
		if (pack == 3) { pack2.css("visibility", "visible");}
		if (pack == 4) { pack3.css("visibility", "visible");}
		if (pack == 5) { pack4.css("visibility", "visible");}
		if (pack == 6) { pack5.css("visibility", "visible");}
		if (pack == 7) { pack6.css("visibility", "visible");}
		if (pack == 8) { pack7.css("visibility", "visible");}
		if (pack == 9) { pack8.css("visibility", "visible");}
		if (pack == 10) { pack9.css("visibility", "visible");}

		setInterval(function(){
			num = num + 4 * pack-1;
			res.html(num + "pièces");
		}, 500);


	}
})
