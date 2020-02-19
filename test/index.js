const { OptionsTable, table, thead, tbody, tr, td, CheckBoxInput } = require('../src/smartdom')

console.log("starting app")

let app = OptionsTable({options: [
    CheckBoxInput({
        id: "local",
        display: "Local"
    }),
    CheckBoxInput({
        id: "usebook",
        display: "Use book"
    })
]})

app.mount()

document.querySelector("#root").appendChild(app.e)

console.log("app started")
