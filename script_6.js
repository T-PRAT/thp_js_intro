codeARN = [
["Sérine", "UCU", "UCC", "UCA", "UCG", "AGU", "AGC"],
["Proline", "CCU", "CCA", "CCC", "CCG"],
["Leucine", "UUA", "UUG"],
["Phénylalanine", "UUU", "UUC"],
["Arginine", "CGU", "CGC", "CGA", "CGG", "AGA", "AGG"],
["Tyrosine", "UAU", "UAC"]
];

function convert_ARN(str, arr) {
	let res = "";
	for (let c = 0; c < str.length; c += 3) {
		dance:
		for (let i = 0; i < arr.length; i++) {
			for (let j = 1; j < arr[i].length; j++) {
				if (arr[i][j] == str.slice(c, c + 3)) {
					res += arr[i][0];
					break dance;
				}
			}
		}
		if (c < str.length)
			res += " ";
	}
	return res;
}

let ARN = prompt("Rentrer un code ARN");
alert(convert_ARN(ARN, codeARN));
