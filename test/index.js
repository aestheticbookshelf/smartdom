const { div, CheckBoxInput } = require('../src/smartdom')

let app = div().w(100).h(100).pad(10).bc("#0f0").a(
    div().bc("#00f").c("#fff").pad(10).html("test"),
    CheckBoxInput({id: "check"})
)

app.mountChilds()

document.querySelector("#root").appendChild(app.e)
