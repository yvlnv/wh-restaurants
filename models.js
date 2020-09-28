class Restaurant {
    constructor({name, image = 'http://image.url'}) {
        if (!name) throw new Error("Restaurant must have a name")
        this.name = name
        this.image = image
        this.menus = []
    }
    addMenu(menu) {
        this.menus.push(menu)
    }
    deleteMenu(menu) {
        const index = this.menus.indexOf(menu)
        this.menus.splice(index, 1)
    }
}

class Menu {
    constructor({name}) {
        this.name = name
        this.items = []
    }
    addItem(item) {
        this.items.push(item)
    }
    deleteItem(item) {
        const index = this.items.indexOf(item)
        this.items.splice(index, 1)
    }
}

class Item {
    constructor({name}) {
        this.name = name
        this.price = undefined
        this.ingredients = []
    }
    addIngredient(ingredient) {
        this.ingredients.push(ingredient)
    }
}

class Ingredient {
    constructor({name}) {
        this.name = name
    }
}

module.exports = {Restaurant, Menu, Item, Ingredient}