// Include express module 
const express = require('express')
const app = express()

// Declare server related variables 
const port = 3000

// Require express handlebars here
const exphbs = require('express-handlebars')

// Include restaurant list json file
const restaurant_list = require('./restaurant.json')

// Setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Setting static files
app.use(express.static('public'))

// Handle request and response of the server
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurant_list.results })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  // Find the data of the restaurant 
  const restaurant = restaurant_list.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  // Render the page with the data of the restaurant
  res.render('show', { restaurant: restaurant })
})

app.get('/search', (req, res) => {
  // Escaping special character
  function replacer(match) { return `\\${match}` }
  const updatedInput = req.query.keyword.replace(/\W/g, replacer)
  // Define regular expression 
  const regex = new RegExp(updatedInput, 'i')
  // Filter for the corresponded restaurants
  const restaurants = restaurant_list.results.filter(restaurant => restaurant.name.match(regex))
  // Render the page with results
  res.render('index', { restaurants: restaurants, keyword: req.query.keyword })
})

// Start and listen to the server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})