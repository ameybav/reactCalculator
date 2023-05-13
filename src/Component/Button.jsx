import React from 'react'

export default function Button({clearText, paramVal}) {
  return (
    <div>
        <div className = 'btn-class'>
            <div>
                <button onClick={() => paramVal(7)}>7</button>
                <button onClick={() => paramVal(8)}>8</button>
                <button onClick={() => paramVal(9)}>9</button>
                <button onClick={() => paramVal("+")}>+</button>
            </div>
            <div>
                <button onClick={() => paramVal(4)}>4</button>
                <button onClick={() => paramVal(5)}>5</button>
                <button onClick={() => paramVal(6)}>6</button>
                <button onClick={() => paramVal("-")}>-</button>
            </div>
            <div>
                <button onClick={() => paramVal(1)}>1</button>
                <button onClick={() => paramVal(2)}>2</button>
                <button onClick={() => paramVal(3)}>3</button>
                <button onClick={() => paramVal("*")}>*</button>
            </div>
            <div>
                <button onClick={() => paramVal("/")}>/</button>
                <button onClick={() => paramVal(0)}>0</button>
                <button onClick={() => paramVal("=")}>=</button>
                <button onClick={() => clearText("")}>Clear</button>
            </div>
            
            
            
            
            
            
        </div>
    </div>
  )
}
