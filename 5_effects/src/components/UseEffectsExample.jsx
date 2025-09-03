import { useState, useEffect } from 'react'

const UseEffectsExample = () => {
    //sem dependencia
    useEffect(() => {
        console.log("Rodou UE1")
    })
    // com dependencia vazias
    useEffect(() => {
        console.log("Rodou UE2")
    }, []);


    const [count, setCount] = useState(0);

    // com dependencias
    useEffect(() => {
        console.log("Rodou UE3")
    }, [count])
  return (
    <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar contagem</button>
    </div>
  )
}

export default UseEffectsExample