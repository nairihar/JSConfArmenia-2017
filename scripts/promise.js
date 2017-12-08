const fs = require('fs');

function getName() {
	return new Promise((resolve, reject) => {
		fs.readFile('../files/name.txt', (err, name) => {
			if (err) {
				return reject(err);
			}

			resolve(name);
		});
	});
}

function getEmail() {
	return new Promise((resolve, reject) => {
		fs.readFile('../files/email.txt', (err, email) => {
			if (err) {
				return reject(err);
			}

			return resolve(email);
		});
	})
}

function getUniversity() {
	return new Promise((resolve, reject) => {
		fs.readFile('../files/university.txt', (err, university) => {
			if (err) {
				return reject(err);
			}

			return resolve(university);
		});
	})
}


Promise.all([getName(), getEmail(), getUniversity()])
		.then(res => {
			let [name, email, university] = res;
			console.log(`Hello I am ${name}, my email is ${email} and I study in ${university}`);
		})
		.catch(console.error);
