import { useState } from "react"
import fish from "./assets/fish.png"

function App() {
  const [count, setCount] = useState<number>(localStorage.getItem("count") === null ? 0 : parseInt(localStorage.getItem("count") as string))
  const [isPressed, setPressed] = useState(false);
  function handleClick() {
    setPressed(true);
    setTimeout(() => {
      setPressed(false);
    }, 100);
    setCount(c => {
      localStorage.setItem("count", (count + 1).toString());
      return c + 1
    })
  }
  return (
    <div className="h-full w-full flex justify-center flex-col items-center p-8" >
      <button onClick={handleClick} className={`block ${isPressed && "scale-95"}`}>
        <img src={fish} alt="" className="block max-h-full"/>
      </button>
      <h1 className="text-7xl text-white font-bold text-center">{count}</h1>
      <div className="absolute bottom-2 right-2 text-gray-400">
        <p>製作: 倚恩</p>
        <p>想法: 信信</p>
      </div>
    </div>
  )
}

export default App
