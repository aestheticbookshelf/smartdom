(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class SmartDomElement_{
    constructor(propsOpt){
        let props = propsOpt || {}

        let tag = props.tag || "div"

        this.id = props.id

        this.childs = []

        this.e = document.createElement(tag)
    }

    a(...childs){
        let childList = []

        for(let child of childs){
            if(child instanceof Array) childList = childList.concat(child)
            else childList.push(child)
        }

        let index = 0

        for(let child of childList){
            child.parent = this
            child.index = index++
            this.childs.push(child)
            this.e.appendChild(child.e)
        }        

        return this
    }

    addStyle(name, value){
        this.e.style[name] = value
        return this
    }

    w(x)        {return this.addStyle("width", x + "px")}
    h(x)        {return this.addStyle("height", x + "px")}    
    pad(x)      {return this.addStyle("padding", x + "px")}
    c(x)        {return this.addStyle("color", x)}
    bc(x)       {return this.addStyle("backgroundColor", x)}
    html(x)     {this.e.innerHTML = x;return this}
}

class div_ extends SmartDomElement_{
    constructor(props){
        super(props)
    }
}
function div(props){return new div_(props)}

module.exports = {
    div: div
}

},{}],2:[function(require,module,exports){
const { div } = require('../src/smartdom')

let app = div().w(100).h(100).pad(10).bc("#0f0").a(
    div().bc("#00f").c("#fff").pad(10).html("test")
)

document.querySelector("#root").appendChild(app.e)

},{"../src/smartdom":1}]},{},[2]);
