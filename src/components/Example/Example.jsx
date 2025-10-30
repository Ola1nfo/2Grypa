import { useState } from "react";

export default function Example () {
    const [count, setCount] = useState(0)
    console.log(count);
    

    return (
        <div className="container">
            <p>You clicket {count} time</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}