import React from 'react'

function Top() {

  let topInfo = ''



  if (window.location.href === 'http://localhost:5173/addCard') {
    topInfo = 'ADD A NEW BANK CARD'
  } else {
    topInfo = 'E-WALLET'
  }


  return (
    <header>
      <h1 className='e__card'>{topInfo}</h1>
    </header>
  )
}

export default Top