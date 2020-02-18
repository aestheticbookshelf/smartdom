(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Global functions
 */

/**
 * get a value from localStorage
 * @param path {string} path 
 * @param defaultValue {any} default value ( returned if stored value is not available or non parsable )
 */
function getLocal(path, defaultValue){
    let stored = localStorage.getItem(path)
    if(stored){
        try{
            let value = JSON.parse(stored)
            return value
        }catch(err){}
    }
    return defaultValue
}

/**
 * store a value in localStorage
 * @param path {string} path 
 * @param value {any} value ( should be JSON serializable )
 * @returns true on success, false otherwise
 */
function storeLocal(path, value){
    try{
        localStorage.setItem(path, JSON.stringify(value))
        return true
    }catch(err){}  
    return false  
}

/**
 * Classes
 */

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
     * <tr><td>forceStorePath</td><td>force store path</td>
     * </table>
     */
    constructor(propsOpt){
        let props = propsOpt || {}
        this.props = props

        let tag = props.tag || "div"

        this.id = props.id

        this.childs = []

        this.e = document.createElement(tag)

        this.state = {}
    }

    /**
     * append childs
     * @param childs {...any} child elements, either single elements or arrays of elements
     * @example
     * div().a(
     *  div().html("Single div appended."),
     *  [
     *      div().html("Div appended as array element 0."),
     *      div().html("Div appended as array element 1."),
     *  ]
     * )
     */
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

    /**
     * add style and return the instance
     * @param name {string} style name 
     * @param value {string} style value 
     */
    addStyle(name, value){
        this.e.style[name] = value
        return this
    }

    /**
     * set width
     * @param x {number} width in pixels
     */
    w(x)        {return this.addStyle("width", x + "px")}
    /**
     * set height
     * @param x {number} height in pixels
     */
    h(x)        {return this.addStyle("height", x + "px")}    
    /**
     * set padding
     * @param x {number} padding in pixels
     */
    pad(x)      {return this.addStyle("padding", x + "px")}
    /**
     * set color
     * @param x {string} color
     */
    c(x)        {return this.addStyle("color", x)}
    /**
     * set background-color
     * @param x {string} background color
     */
    bc(x)       {return this.addStyle("backgroundColor", x)}
    /**
     * set inner html
     * @param x {string} HTML string
     */
    html(x)     {this.e.innerHTML = x;return this}

    /**
     * the id used as a path element
     */
    pathId(){
        return this.id
    }

    /**
     * list of path ids leading to the element
     */
    pathList(){
        let pathList = []
        let current = this
        while(current){
            if(current.pathId()) pathList.unshift(current.pathId())
            current = current.parent
        }
    }

    /**
     * path to the element
     */
    path(){
        let pathList = this.pathList()
        if(!pathList.length) return null
        return pathList.join("/")
    }

    /**
     * store path of the element, by default it is the element path,
     * but this can be overridden with props.forceStorePath
     */
    storePath(){
        if(this.props.forceStorePath) return this.props.forceStorePath
        return this.path()
    }

    /**
     * store the element state in localStorage if it has a path
     */
    storeState(){
        if(this.storePath()){
            storeLocal(this.storePath(), this.state)
        }
    }

    /**
     * retrieve the element state from localStorage if it has a path
     */
    retrieveState(){
        if(this.storePath()){
            this.state = getLocal(this.storePath(), this.state)
        }
    }

    /**
     * initialize state from props, should be implemented by derived classes
     */
    initState(){
        // abstract
    }

    /**
     * build element from scratch, should be implemented by derived classes
     */
    build(){
        // abstract
    }

    /**
     * mount element
     */
    mount(){
        this.retrieveState()
        this.initState()
        this.build()
    }

    /**
     * mount childs of the element
     */
    mountChilds(){
        for(let child of this.childs){
            child.mount()
        }
    }
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
 * returns a new div_ instance
 * @param props {object} props <opt-param />
 * @example
 * // creates a div with content "I'm a div."
 * div().html("I'm a div.")
 */
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
