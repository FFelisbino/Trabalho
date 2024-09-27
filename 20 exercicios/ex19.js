var totalSegundos = parseInt(556);

var h = totalSegundos / 3600;
totalSegundos = totalSegundos % 3600;
		
var m = totalSegundos / 60;
totalSegundos = totalSegundos % 60;
		
var s = totalSegundos;

console.log(Math.floor(h)+ ":" + Math.floor(m) + ":" + Math.floor(s));