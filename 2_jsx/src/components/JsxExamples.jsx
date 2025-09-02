import React from 'react'

const JsxExamples = () => {
  
  const userIsLogedIn = false;

  const users = [{id: 1, nome:'Pedro'},
  {id: 2, nome:'Ana'},
  {id: 3, nome:'João'}]
  return (
    <div>
    <h2>Conteudo que o usuario visualiza</h2>
    
  
    {/* Principais diferencas do html */} 
    <div className='teste'></div>
    <div class="teste"></div>
    {/* As duas classes são difentes, uma indica um nome que pode ser reutilizado
    e a outra um nome que apenas ela tem */}

    {/* CONDICIONAIS */}

    {userIsLogedIn ? (
      <div>Está logado</div>
    ) : (
      <div> Não está logado</div>
    )}


    <p>{ 2 + 2 }</p>

    <div>
      
        {users.map((user) =>(
          <li key={user.id}>
            {user.id} - {user.nome}
            </li>
        ) )}
    </div>
    </div>
  )
}

export default JsxExamples;