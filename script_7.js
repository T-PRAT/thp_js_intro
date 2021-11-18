while (42) {
	mess = prompt("Parle à acné-Bot");
	if (!mess) {
		alert("t'es en PLS ?");
	} else if (mess[mess.length - 1] == '?') {
		alert("Ouais Ouais...");
	} else if (mess.toUpperCase() === mess) {
		alert("Pwa, calme-toi...");
	} else if (mess.includes("Fortnite")) {
		alert("on s' fait une partie soum-soum ?");
	} else {
		alert("balek.");
	}
}
