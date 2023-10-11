const express = require('express')
const ExpressAsPromise = require('express-as-promise')
const path = require('path')

const server = new ExpressAsPromise()
const app = server.app

app.use(express.static(path.join(__dirname, '../../.build/')))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.dirname(require.resolve('mocha'))))

app.get('/plain-text', (req, res) => {
  res.send('text')
})

function init () {
  return server.listen(8081, 'localhost')
}

init.stop = () => {
  return server.stop()
}

init().then(function () {
  console.log('http://localhost:8081/')
}).catch(function (err) {
  console.error(err.stack || err.message)
})

module.exports = init
