const Tram = require('tram-one')
const html = Tram.html()

const homeRoute = () => html`<div>HOME ROUTE</div>`
const notFoundRoute = () => html`<div>NOT FOUND ROUTE</div>`
const detailsRoute = () => html`<div>DETAILS ROUTE</div>`

new Tram()
  .addRoute('/', homeRoute)
  .addRoute('/404', notFoundRoute)
  .addRoute('/details', detailsRoute)
  .start('.main')
