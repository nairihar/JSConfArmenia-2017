/*-------- Native Promsie Example --------*/

promiseFunc()
	.then(() => {
		// Some code
	})
	.then(() => {
		// Some code
	})
	.then(() => {
		// Some code
	});

/*----------------------------------------*/

/*-------- Bluebird Promsie Example --------*/

const Promise = require('bluebird');
Promise.config({
    cancellation: true
});

let p = promiseFunc()
	.then(() => {
		// Some code
	})
	.then(() => {
		// Some code
		p.cancel();
	})
	.then(() => {
		// Some code
	});

/*----------------------------------------*/
