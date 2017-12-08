const fs = require('fs');

fs.readFile('../files/name.txt', (err, name) => {
	if (err) {
		return console.error(err);
	}

	fs.readFile('../files/email.txt', (err, email) => {
		if (err) {
			return console.error(err);
		}

		fs.readFile('../files/university.txt', (err, university) => {
			if (err) {
				return console.error(err);
			}

			console.log(`Hello I am ${name}, my email is ${email} and I study in ${university}`);
		});
	});
});
