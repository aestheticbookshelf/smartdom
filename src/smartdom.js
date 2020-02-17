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
