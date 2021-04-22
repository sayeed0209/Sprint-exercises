// exercise 1
const result = document.getElementById('result');
// const nameArr = ['S', 'A', 'Y', 'E', 'E', 'D'];
// for (let i = 0; i < nameArr.length; i++) {
// 	const li = document.createElement('li');
// 	li.textContent = nameArr[i];
// 	result.append(li);
// 	console.log(nameArr[i].toUpperCase());
// }

const lname = 'sayeed';
const n = lname.split('');
for (let i = 0; i < n.length; i++) {
	const li = document.createElement('li');
	li.textContent = lname[i].toUpperCase();
	result.append(li);
	console.log(n[i].toUpperCase());
}

// exercise 2
function findVowel(str) {
	console.log(str);
	for (let i = 0; i < str.length; i++) {
		if (
			str[i] == 'a' ||
			str[i] == 'e' ||
			str[i] == 'i' ||
			str[i] == 'o' ||
			str[i] == 'u'
		) {
			console.log(`I have found a Vowel : ${str[i].toUpperCase()}`);
		} else if (str[i] === str.replace(/[^0-9]/g, '')) {
			console.log(
				`Name of the persons should not contain the number : ${str[i]}`
			);
		} else {
			console.log(`I have found Constant :${str[i].toUpperCase()}`);
		}
	}
}

findVowel('robin1');
// exercise 3
// Store the letters of the array and the number of times they appear on a Map.
const words = [
	'a',
	'b',
	'a',
	'c',
	'b',
	'a',
	'd',
	'b',
	'c',
	'f',
	'g',
	'h',
	'h',
	'h',
	'e',
	'a',
];
let count = {};
words.forEach(value => {
	count[value.toUpperCase()] = ++count[value.toUpperCase()] || 1;
});
console.log(count);

// exercise 4

const firstName = ['A', 'B', 'U'];
const lastName = ['S', 'A', 'Y', 'E', 'E', 'D'];
const fullName = firstName.concat(' ').concat(lastName);
console.log(fullName);

// exercise 5

function emailArr(...email) {
	// const unique = email.filter((mail, index) => email.indexOf(mail) === index);
	// const unique = Array.from(new Set(email));
	const unique = [...new Set(email)];
	return unique;
}

console.log(
	emailArr(
		'sayeed@gmail.com',
		'jafor@SpeechGrammarList.com',
		'sayeed@gmail.com',
		'jafor@SpeechGrammarList.com',
		'sayeed',
		'sayeed',
		'jhon@gmail.com',
		'jafor'
	)
);

// const filterUsers = email.filter((user, index) => {
// 		const firstName = user.split('@')[0];
// 		if (email.indexOf(firstName) !== -1) {
// 			console.log(`${firstName} already exists`);
// 		} else {
// 			// console.log(`${firstName} Welocme :)`);
// 			return [...new Set(user)];
// 		}
// 	});

// 	return filterUsers;
