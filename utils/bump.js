const fs = require("fs")

let pkgJson = JSON.parse(fs.readFileSync("package.json").toString())

let m = pkgJson["version"].match(/(.*\.)([0-9]+)$/)

let newVer = m[1] + ( parseInt(m[2]) + 1 )

pkgJson["version"] = newVer

fs.writeFileSync("package.json", JSON.stringify(pkgJson, null, 2))
