'use client'
import { useState } from "react";

export default function Home() {
  const [expression, setExpression] = useState('')

  const handleButtonClick = (value: string) => {
    if(value === '='){
      try{
        const evalResult = eval(expression).toString();
        setExpression(evalResult);
      }catch(error){
        setExpression('Error');
      }
    }else if (value === 'DEL'){
      setExpression('');
    }else{
      setExpression((prevExpression) => prevExpression + value);
    }
  }

  const buttons = [
    '7', '8', '9', 'DEL',
    '4', '5', '6', '+',
    '1', '2', '3', '-',
    '.', '0', '/', '*',
    'Insert', '=',
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4x1 font-bold mb-10">Calculator</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <input 
          type="text" 
          className="w-full mb-2 bg-gray-950 text-3x1 text-zinc-100 border-b-2 border-gray-400 focus:outline-none text-right py-3"
          value = {expression}
          readOnly
        />
        <div className = "grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
            key={btn}
            onClick={() => handleButtonClick(btn)}
            className={`text-4x1 ${
              btn === "Insert" ? "bg-gray-500 col-span-2" : btn === "=" ? "bg-red-500 w-full col-span-2" : btn === "DEL" ? "bg-gray-500" : "bg-gray-300 hover:bg-gray-400"
            } p-2 rounded-lg`}
          >
            {btn === "DEL" ? <span className="text-gray-800">{btn}</span> : btn}
          </button>
          ))}
        </div>
      </div>
    </main>
  );
}
