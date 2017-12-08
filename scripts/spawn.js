function spawn(genFn, args) {
	return Promise.resolve().then(function() {
    	let gen = genFn.apply(null, args);

    	return tick();
    
	    function tick(step) {
			if (step && step.done) return step.value;
			let stepResult = step ? Promise.resolve(step.value) : Promise.resolve(undefined);

			return stepResult.then(pass).catch(fail);
	    }

	    function pass(res) {
			try {
				res = gen.next(res);
			} catch(e) {
				return Promise.reject(e);
			}
      		return tick(res);
	    }

	    function fail(err) {
			try {
				err = gen.throw(err);
			} catch(e) {
				return Promise.reject(e);
			}
			return tick(err);
	    }
	});
}

module.exports = spawn;