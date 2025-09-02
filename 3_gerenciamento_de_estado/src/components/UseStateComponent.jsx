import React, { useState } from 'react';

function UseStateComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    console.log(count); // cuidado: pode mostrar o valor antigo por causa do estado assíncrono
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>Você clicou {count} vezes</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default UseStateComponent;
