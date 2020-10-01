const {loader, db} = require('./loader')
const menus = require('./menus.json')
const restaurants = require('./restaurants.json')
const items = require('./items.json')

describe('loader', () => {
    beforeAll((done) => {
        db.exec('CREATE TABLE IF NOT EXISTS restaurants(id INTEGER PRIMARY KEY, name TEXT, image TEXT);CREATE TABLE IF NOT EXISTS menus(id INTEGER PRIMARY KEY, name TEXT, restaurant_id INTEGER);CREATE TABLE IF NOT EXISTS items(id INTEGER PRIMARY KEY, name TEXT, menu_id INTEGER);', done)
    })
    test('Loads restaurants', (done) => {
        const callback = db => {
            db.all("SELECT * FROM restaurants;", (err, rows) => {
                expect(rows.length).toBe(4)
                done()
            })
        }
        loader('restaurants', restaurants, callback)
    })
    test('Loads menus', (done) => {
        const callback = (db) => {
            db.all("SELECT * FROM menus;", (err, rows) => {
                expect(rows.length).toBe(7)
                done()
            })
        }
        loader('menus', menus, callback)
    })
    test('Loads items', (done) => {
        const callback = (db) => {
            db.all("SELECT * FROM items;", (err, rows) => {
                expect(rows.length).toBe(1)
                done()
            })
        }
        loader('items', items, callback)
    })
})