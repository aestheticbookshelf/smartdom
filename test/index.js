const { div } = require('../src/smartdom')

let app = div().w(100).h(100).bc("#0f0")

document.querySelector("#root").appendChild(app.e)
