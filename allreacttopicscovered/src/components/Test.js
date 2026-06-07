import { useState } from "react";

function Test() {
    let [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
  return (
   <> 
       <h1>Count: {count}</h1>  
       <button onClick={increment}>Increment</button>
   </>
  );
}

export default Test;