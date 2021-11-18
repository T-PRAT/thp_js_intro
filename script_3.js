let nbr = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

if (isNaN(nbr) || nbr < 0) {
	console.log("L'entrée n'est pas un nombre positif");
} else {
	let i = 1;
	while (i <= nbr) {
		let line = "";
		for (let c = 0; c < nbr - i; c++) {
			line += " ";
		}
		for (let c = 0; c < i; c++) {
			line += "#";
		}
		console.log(line);
		i++;
	}
}
