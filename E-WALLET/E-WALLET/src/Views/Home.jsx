import React from 'react'
import Top from '../Components/Top'
import CardForm from '../Components/CardForm'



function AddCard() {






  return (
    <div className='addCard'>
     <Top />
     <p className='newCardText'>NEW CARD</p>

     <CardForm />
    </div>
  )
}

export default AddCard