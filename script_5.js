const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 1 },
  { title: 'Guerre et Paix', id: 748147, rented: 19}
];

function rented_once(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].rented <= 0) {
			return false;
		}
	}
	return true;
}

function least_rented(arr) {
	let res = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].rented < res)
			res = arr[i];
	}
	return res;
}

function sort_by_name(arr) {
	arr.sort((a, b) => {
    let fa = a.title.toLowerCase(), fb = b.title.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
	});
	return arr;
}

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
rented_once(books) ? console.log("oui") : console.log("non");

console.log("Quel est le livre le moins emprunté ?");
console.log(least_rented(books).title);

console.log("Livre avec l'ID 873495 :");
console.log(books.find((book) => book.id == 873495).title);

delete books[books.findIndex((book) => book.id == 133712)];

console.log(sort_by_name(books))
