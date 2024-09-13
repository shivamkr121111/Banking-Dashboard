import { useState } from "react";
import Child from "./Child";


const Parent = () => {
const [a, setA] = useState("parent")
  return( 
    <div>
    I am a {a}
    <Child X={a} setX={setA} />
    </div>
  )
}

export default Parent;
