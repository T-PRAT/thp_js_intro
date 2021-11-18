const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
console.log("Liste des entrepeneurs :");
console.log(entrepreneurs);
console.log(entrepreneurs[0]);

function only_70(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].year >= 1970 && arr[i].year < 1980) {
			res.push(arr[i]);
		}
	}
	return res;
}

function arr_name(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		res.push(arr[i].first + " " + arr[i].last);
	}
	return res;
}

function print_age(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i].first + " " + arr[i].last + " : " +  String(2021 - arr[i].year));
	}
}

function sort_by_name(arr) {
	arr.sort((a, b) => {
    let fa = a.first.toLowerCase(), fb = b.first.toLowerCase();

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

console.log("Les entrepeneurs qui sont né dans les années 70 :");
console.log(only_70(entrepreneurs));

console.log("Tableaux non et prénom des entrepreneur :");
console.log(arr_name(entrepreneurs));

console.log("Age des entrepreneurs :");
print_age(entrepreneurs);

console.log("Les entrepreneurs par ordre alphabétique :");
console.log(sort_by_name(entrepreneurs));
