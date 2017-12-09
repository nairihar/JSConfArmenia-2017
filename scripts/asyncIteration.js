Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

const spawn = require('../scripts/spawn');

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

	let email = yield getEmail();

	let university = yield getUniversity();

	return `Hello I am ${name}, my email is ${email} and i study in ${university}`;
}

//spawn(gen).then(console.log);

function asyncIteration(gen) {
	let iterator = gen();

	return tick();

	function tick(v) {
		let {value, done} = iterator.next(v);

		if (done) {
			return Promise.resolve(value);
		} else {
			return value.then(val => {
				return tick(val);
			});
		}
	}
}

asyncIteration(gen).then(console.log);