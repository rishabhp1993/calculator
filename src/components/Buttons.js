import React from 'react'

function Buttons(props) {

    return (
        <div>
            <div className="keypad">
                <button className="key" onClick={()=>props.registerClickMethod("7")}>7</button>
                <button className="key" onClick={()=>props.registerClickMethod("8")}>8</button>
                <button className="key" onClick={()=>props.registerClickMethod("9")}>9</button>
                <button className="key" onClick={()=>props.registerClickMethod("*")}>X</button>

            </div>
            <div className="keypad">
                <button className="key" onClick={()=>props.registerClickMethod("4")}>4</button>
                <button className="key" onClick={()=>props.registerClickMethod("5")}>5</button>
                <button className="key" onClick={()=>props.registerClickMethod("6")}>6</button>
                <button className="key" onClick={()=>props.registerClickMethod("-")}>-</button>

            </div>
            <div className="keypad">
                <button className="key" onClick={()=>props.registerClickMethod("1")}>1</button>
                <button className="key" onClick={()=>props.registerClickMethod("2")}>2</button>
                <button className="key" onClick={()=>props.registerClickMethod("3")}>3</button>
                <button className="key" onClick={()=>props.registerClickMethod("+")}>+</button>

            </div>
            <div className="keypad">
                <button className="key" onClick={()=>props.registerClickMethod("0")}>0</button>
                <button className="key" onClick={()=>props.registerClickMethod(".")}>.</button>
                <button className="key" onClick={()=>props.registerClickMethod("C")}>C</button>
                <button className="key" onClick={()=>props.registerClickMethod("=")}>=</button>

            </div>
        </div>
    )
}

export default Buttons
