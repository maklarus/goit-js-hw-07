class Storage {
  #items = [];

  constructor(InitialsItems) {
    this.#items = InitialsItems;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    const indexOfRemovingItem = this.#items.indexOf(itemToRemove);
    if (indexOfRemovingItem !== -1) {
      this.#items.splice(indexOfRemovingItem, 1);
    }
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
