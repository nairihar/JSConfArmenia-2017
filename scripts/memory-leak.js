function asyncFunc() {
  	return new Promise((resolve, reject) => {/* Some Async work */});
}

function tryToLock() {
  return asyncFunc().then(status => {
	if (status) {
		return Promise.resolve('locked');
	}

	return tryToLock();
  });
}

tryToLock()
	.then(console.log)
	.catch(console.error);
