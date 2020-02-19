const { Combo, select, option, OptionsTable, table, thead, tbody, tr, td, CheckBoxInput } = require('../src/smartdom')

console.log("starting app")

let app = Combo({
    id: "combo",
    forceOptions: [
        {value: "local", display: "Local"},
        {value: "usebook", display: "Use Book"}
    ]
})

app.mount()

document.querySelector("#root").appendChild(app.e)

console.log("app started")
