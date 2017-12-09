Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

function getName() {
	return fs.readFileAsync('../files/name.txt');
}

function getEmail() {
	return fs.readFileAsync('../files/email.txt');
}

function getUniversity() {
	return fs.readFileAsync('../files/university.txt');
}

function* gen() {
	let name = yield getName();

	console.log(`${name} in gen function`);

	let email = yield getEmail();

	let university = yield getUniversity();

	return `Hello I am ${name}, my email is ${email} and i study in ${university}`;
}

let asyncFunc = Promise.coroutine(gen);

asyncFunc().then(console.log);