import React, { useState, useEffect } from 'react';

function saldoPontos() {
  const [sessionData, setSessionData] = useState()

  useEffect(() => {
    fetch('/api/sessions?items=*')
    .then((res) => res.json())
    .then((res) => setSessionData(res))
  })

  return JSON.stringify(sessionData)
}

const UserPoints = () => {
  return (
    <div>
      <h1>Meus Pontos</h1>
      <div>Seu saldo do Clube de Pontos é:{saldoPontos()}</div>
      
    </div>
  )
}

export default UserPoints
