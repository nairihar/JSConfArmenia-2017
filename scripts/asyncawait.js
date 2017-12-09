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


async function getText() {
	let [name, email, university] = await Promise.all([getName(), getEmail(),  getUniversity()])

	return `Hello I am ${name}, my email is ${email} and I study in ${university}`;
}

(async () => {
	console.log(await getText());
})();