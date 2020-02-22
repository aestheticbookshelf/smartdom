const { div, alert, Button, Combo, select, option, OptionsTable, table, thead, tbody, tr, td, CheckBoxInput } = require('../src/smartdom')

console.log("starting app")

let app = div().w(200).h(200).bc("#0f0").a(
    Button("Press Me", () => alert({msg: "I was pressed.", kind: "info"})),
    Button("Success", () => alert({msg: "Success.", kind: "success"})),
    Button("Error", () => alert({msg: "Error.", kind: "error", delay: 500}))
)

app.mount()

document.querySelector("#root").appendChild(app.e)

console.log("app started")
