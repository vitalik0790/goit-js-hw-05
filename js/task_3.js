// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его 
// в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

class Storage {
    constructor(items) {
        this.items = items;
    };
    getItems() {
        return this.items
    };
    addItem(item) {
        return this.items.push(item)
    };
    removeItem(item) {
        if (this.items.includes(item)) {
            return this.items.splice(this.items.indexOf(item), 1)
        }
    };
}

console.log(typeof Storage);
// 'function'

const goods = [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор'
];

const storage = new Storage(goods);
console.log(storage.getItems());

storage.addItem('Дроид');
console.log(storage.getItems());

storage.removeItem('Пролонгер');
console.log(storage.getItems());


