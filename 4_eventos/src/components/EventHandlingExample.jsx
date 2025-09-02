import { useState } from 'react'

function EventHandlingExample() {

    const handleClick = () => {
        alert("testando");
    }
  return (
    <div>
        <button onClick={() => alert("oi")}> Botao 1</button>
        <button onClick={handleClick}> Botao 2</button>
    </div>
  )
}

export default EventHandlingExample