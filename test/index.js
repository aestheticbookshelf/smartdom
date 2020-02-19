const { table, thead, tbody, tr, td, CheckBoxInput } = require('../src/smartdom')

let app = table({cellpadding: 3, cellspacing: 3, border: 1}).a(
    thead().a(
        tr().a(
            td().html("Option Name"),
            td().html("Option Value"),
        )
    ),
    tbody().a(
        tr().a(
            td().html("Local"),
            td().a(CheckBoxInput({id: "local"})),
        )
    )
)

app.mountChilds()

document.querySelector("#root").appendChild(app.e)
