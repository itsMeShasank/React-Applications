import {useStore} from "zustand/react";
import {countStore} from "./store/Count.tsx";

function App() {
    const {count, increment, decrement, reset, update} = useStore(countStore);
  return (
    <>
      <h1 className="m-4">Zustand Demo</h1>
        <div className="flex flex-row gap-3 ">
            <button onClick={increment} className="border border-gray-400 rounded w-30">Increment</button>
            <button onClick={decrement} className="border border-gray-400 rounded w-30">Decrement</button>
            <button onClick={()=> update(10)} className="border border-gray-400 rounded w-30">Update</button>
            <button onClick={reset} className="border border-gray-400 rounded w-30">Reset</button>
            <p>Count: {count}</p>
        </div>

    </>
  )
}

export default App
