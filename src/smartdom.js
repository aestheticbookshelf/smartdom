/**
 * SmartDomElement_ base class foo
 * @param propsOpt {object} props [optional]
 */
class SmartDomElement_{
    /**
     * propsOpt when defined is a dictionary with optional members:
     * <table class="classtable">
     * <tr><td>tag</td><td>HTML tag name [ default : "div" ]</td>
     * <tr><td>id</td><td>element id</td>
     * </table>
     */
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

/**
 * Div
 */
class div_ extends SmartDomElement_{
    constructor(props){
        super(props)
    }
}
/**
 * returns a div_
 * @param props {object} props <opt-param />
 * @example
 * // creates a div with content "I'm a div."
 * div().html("I'm a div.")
 */
function div(props){return new div_(props)}

module.exports = {
    div: div
}
