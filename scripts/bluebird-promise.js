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

Promise.all([getName(), getEmail(), getUniversity()])
		.then(res => {
			let [name, email, university] = res;
			console.log(`Hello I am ${name}, my email is ${email} and I study in ${university}`);
		})
		.catch(console.error);
