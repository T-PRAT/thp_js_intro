let nbr = prompt("De quel nombre veux-tu calculer la factorielle ?");

if (isNaN(nbr) || nbr < 0) {
	console.log("L'entrée n'est pas un nombre positif");
} else if (nbr <= 2) {
	console.log("Le résultat est: ", nbr);
} else {
	let res = 1;
	while (nbr) {
		res *= nbr;
		nbr--;
	}
	console.log("Le résultat est: ", res);
}
