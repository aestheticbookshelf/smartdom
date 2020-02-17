(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class SmartDomElement_{
    constructor(propsOpt){
        let props = propsOpt || {}
        
        let tag = props.tag || "div"

        this.e = document.createElement(tag)
    }

    addStyle(name, value){
        this.e.style[name] = value
        return this
    }

    w(x)        {return this.addStyle("width", x + "px")}
    h(x)        {return this.addStyle("height", x + "px")}    
    bc(x)       {return this.addStyle("backgroundColor", x)}
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

let app = div().w(100).h(100).bc("#0f0")

document.querySelector("#root").appendChild(app.e)

},{"../src/smartdom":1}]},{},[2]);
