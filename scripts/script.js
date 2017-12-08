const Promise = require('bluebird');
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
	yield  getName();
	yield  getEmail();
	yield  getUniversity();
}


async function* asyncGen() {
	for await (let val of gen()) {
		console.log(val);
		yield val;
	}
}

let iterator = asyncGen();

iterator.next().then(console.log);