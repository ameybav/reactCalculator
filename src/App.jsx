import { useState } from 'react'
import './App.css'
import Button from './Component/Button'

function App() {
    const [text, setText] = useState("");

    function getValue(val) {
        let temp = text + "" + val;
        if (val === "=") {
            let stack = [];
            let prevNumber = 0;
            let number = "1234567890";
            let operation = "+-*/"
            let op = "+";

            for (let i=0; i<text.length; i++) {
                if (number.includes(text[i])) {
                    prevNumber = parseInt(text[i]) + prevNumber*10;
                } 
                if (operation.includes(text[i]) || i === text.length-1) {
                    if (op === "+") {
                        stack.push(prevNumber);
                    } else if (op === "-") {
                        stack.push(-prevNumber);
                    } else if (op === "/") {
                        stack.push(stack.pop()*prevNumber);
                    } else if (op === "*") {
                        stack.push(stack.pop()/prevNumber);
                    }
                    op = text[i];
                    prevNumber=0;
                }
            }
            let total=0
            stack.map(s => total = total+s)
            temp = total;
        }
        setText(temp)
    }

    return (
        <div className='App'>
            <div className='textarea-class'>
                <label> {text} </label>
            </div>
            <Button clearText={setText} paramVal={getValue} />
            

        </div>
    )
}

export default App
