"use strict";
//const cars: string[] = ['Ford', 'Audi']
//const cars2: Array<string> = ['Ford', 'Audi']
//const promise = new Promise<string>(resolve => {
//    setTimeout(() => {
//        resolve('Promise resolved')
//    }, 2000)
//})
//promise.then(data => {
//    console.log(data.toLocaleLowerCase().trim().toLocaleUpperCase())
//})
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Mikhail' }, { age: 18 });
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2020 });
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    };
}
console.log(withCount('Привет TypeScript'));
console.log(withCount(['I', 'Am', 'Array']));
console.log({ length: 18 });
//=====
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Mikhail',
    age: 18,
    job: 'JavaScript'
};
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
console.log(getObjectValue(person, 'job'));
//=====
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['I', 'Am', 'Strings']);
strings.add('!');
strings.remove('Am');
console.log(strings.items);
const numbers = new Collection([1, 2, 3, 4, 5]);
numbers.add(6);
numbers.remove(1);
console.log(numbers.items);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
///
const cars = ['Ford', 'Audi'];
//cars.shift()
//cars[1]
const ford = {
    model: 'Ford',
    year: 2002
};
//ford.model = 'Ferrari'
//# sourceMappingURL=generic.js.map