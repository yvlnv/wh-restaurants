const {Restaurant, Menu, Item, Ingredient} = require('./models')

describe('Restaurant', function () {
    test('restaurant has a name', function() {
        const restaurant = new Restaurant({name: 'Zima'})
        expect(restaurant.name).toBe('Zima')
    })
    test('restaurant must have a name', function() {
        expect(() => {new Restaurant({})}).toThrow()
    })
    test('restaurant has menus', function() {
        const restaurant = new Restaurant({name: 'Oliva'})
        const menu1 = new Menu({name: 'Mains'})
        const menu2 = new Menu({name: 'Drinks'})
        restaurant.addMenu(menu1)
        restaurant.addMenu(menu2)
        expect(restaurant.menus.length).toBe(2)
    })
    test('menu is deleted', function() {
        const restaurant = new Restaurant({name: 'Oliva'})
        const menu1 = new Menu({name: 'Mains'})
        const menu2 = new Menu({name: 'Drinks'})
        restaurant.addMenu(menu1)
        restaurant.addMenu(menu2)
        restaurant.deleteMenu(menu2)
        expect(restaurant.menus.length).toBe(1)
    })
})

describe('Menu', function () {
    test('menu has a name', function() {
        const menu = new Menu({name: 'Mains'})
        expect(menu.name).toBe('Mains')
    })
    test('menu has items', function() {
        const menu = new Menu({name: 'Drinks'})
        const water = new Item({name: 'Water'})
        menu.addItem(water)
        expect(menu.items.length).toBe(1)
        expect(Array.isArray(menu.items)).toBeTruthy()
    })
    test('item deleted from menu', function() {
        const menu = new Menu({name: 'Drinks'})
        const water = new Item({name: 'Water'})
        const tea = new Item({name: 'Tea'})
        menu.addItem(water)
        menu.addItem(tea)
        menu.deleteItem(water)
        expect(menu.items.length).toBe(1)
    })
})

describe('Item', function () {
    test('item has a name', function() {
        const burger = new Item({name: 'Beef burger'})
        expect(burger.name).toBe('Beef burger')
    })
    test('item has a price', function() {
        const soup = new Item({name: 'Gaspacho'})
        soup.price = 7.5
        expect(soup.price).toBe(7.5)
    })
    test('item has ingredients', function() {
        const soup = new Item({name: 'Gaspacho'})
        const tomato = new Ingredient({name: 'Tomato'})
        soup.addIngredient(tomato)
        expect(soup.ingredients.length).toBe(1)
    })
})