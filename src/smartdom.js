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
