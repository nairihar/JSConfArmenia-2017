let obj = {
	name: 'Narek',
	age: 25,

	[Symbol.iterator]() {
		let keys = Object.keys(this),
			index = 0;

		return {
			next: () => {
				return {
					value: {
						key: keys[index],
						val: this[keys[index++]]
					},
					done: index == keys.length + 1
				}
			}
		}
	}
};

let iterator = obj[Symbol.iterator]();

console.log(iterator.next());

for (let {key, val} of obj) {
	console.log(`${key} : ${val}`);
}