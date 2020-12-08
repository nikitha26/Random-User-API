import React,{useEffect, useState} from "react";

function UseEffect(){
const[count , setCount] = useState(0)

  useEffect(() => {                    //Component rerender first ,after rerender useEffect executes.
      document.title = `Count ${count}`  //What ever in function inside code is there that totally execute.
  })
   return(
       <div>
           <h4>Current count is {count}</h4>
           <button onClick={() =>setCount(count+1)}>Increase count</button>
       </div>
   )
}
export default UseEffect;