import React from 'react'
import './CardStack.scss'
import chip__dark from '../assets/chip-dark.svg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { replaceActive } from '../actions/actions'
import { deleteSelect } from '../actions/actions'
import { useEffect } from 'react'


function CardStack() {



  const navigate = useNavigate();
  const activeCard = useSelector((state => { return state.activeCard }));
  const cardStackRedux = useSelector((state => { return state.cards }));
  const dispatch = useDispatch();



  ///////////////// . Here we render out active card from redux store 

  const activeCardRedux = activeCard.map((elem) => {

    return (

      <article style={{ background: elem.vendor }} key={elem.id} className='newCard'>

        <div className="newCard__Logos">
          <img src={elem.chip} alt="chip" />
          <div className="logNButton">
            <img className='logo' src={elem.logo} alt="logo" />
            <button onClick={() => { deleteActiveCard(elem) }} className='delButton'>x</button>
          </div>

        </div>

        <p style={{ color: elem.text }} className='newCard__number'>{elem.cardNumber}</p>

        <div className="newCard__info">

          <div className="newCard__personalInfo">
            <p style={{ color: elem.text }} className='newCard__cardholder'>CARDHOLDER NAME</p>
            <p style={{ color: elem.text }} className='newCard__name'>{elem.cardHolder}</p>
          </div>

          <div className="newCard__date">
            <p style={{ color: elem.text }} className='newCard__valid'>VALID TRHRU</p>
            <p style={{ color: elem.text }} className='newCard__year'>{elem.valid}</p>
          </div>


        </div>

      </article>
    )
  })

  ///////////////////////////////

  ///////////////// . Here we render out cardStack from redux store 






  const cardStack = cardStackRedux.map((elem) => {

    return (


      <article style={{ background: elem.vendor }} key={elem.id} className='newStack'>


        <div className="newCard__Logos">
          <img src={elem.chip} alt="chip" />
          <p onClick={() => { replaceActiveCard(elem) }} className='activate'>Activate</p>
          <div className="logNButton">
            <img className='logo' src={elem.logo} alt="logo" />
            <button onClick={() => {deleteCard(elem)}} className='delButton'>x</button>
          </div>
        </div>

        <p style={{ color: elem.text }} className='newCard__number'>{elem.cardNumber}</p>

        <div className="newCard__info">

          <div className="newCard__personalInfo">
            <p style={{ color: elem.text }} className='newCard__cardholder'>CARDHOLDER NAME</p>
            <p style={{ color: elem.text }} className='newCard__name'>{elem.cardHolder}</p>
          </div>

          <div className="newCard__date">
            <p style={{ color: elem.text }} className='newCard__valid'>VALID TRHRU</p>
            <p style={{ color: elem.text }} className='newCard__year'>{elem.valid}</p>
          </div>


        </div>

      </article>
    )
  })

  ////////////////////////////


  /////////////////////// Saving local Storage in Variable and creating a delete function from local storage





  const localStorageCards = JSON.parse(localStorage.getItem('showList'))

  const deleteCard = (elem) => {

    const index = localStorageCards.findIndex(localStorageCards => localStorageCards.id === elem.id)
    localStorageCards.splice(index, 1);
    localStorage.setItem('showList', JSON.stringify(localStorageCards));
    dispatch(deleteSelect(elem))
  

    if (elem.id == activeLocalCard[0].id) {
      activeLocalCard.splice(0, 1)
      localStorage.setItem('activeCard', JSON.stringify(activeLocalCard));
      dispatch(deleteSelect(elem))
    }

  }

  ////////////////////////////////////////////////////////////////////////////////////////




  const reverseOb = Object.values(localStorageCards).reverse();    //// . Reverse the array of objects we get from Local Storage to match the rendering order we get from Redux store

  const activeLocalCard = JSON.parse(localStorage.getItem('activeCard'))

  const replaceActiveCard = (elem) => {

    dispatch(replaceActive(elem))
    localStorage.setItem('activeCard', JSON.stringify([(elem)]))
  

  }



  const deleteActiveCard = (elem) => {

    dispatch(deleteSelect(elem))
    activeLocalCard.splice(0, 1)
    localStorage.setItem('activeCard', JSON.stringify(activeLocalCard));
  }




  return (
    <>
      <p className='activeCard'>ACTIVE CARD</p>
      <div className="active">

        {activeCardRedux}


        {activeLocalCard ?

          activeLocalCard.map((elem) => {
            if (activeLocalCard.length > 0 && activeCard.length == 0) {
              return (


                <article style={{ background: elem.vendor }} key={elem.id} className='newCard'>

                  <div className="newCard__Logos">
                    <img src={elem.chip} alt="chip" />
                    <div className="logNButton">
                      <img className='logo' src={elem.logo} alt="logo" />
                      <button onClick={() => { deleteActiveCard(elem) }} className='delButton'>x</button>
                    </div>

                  </div>

                  <p style={{ color: elem.text }} className='newCard__number'>{elem.cardNumber}</p>

                  <div className="newCard__info">

                    <div className="newCard__personalInfo">
                      <p style={{ color: elem.text }} className='newCard__cardholder'>CARDHOLDER NAME</p>
                      <p style={{ color: elem.text }} className='newCard__name'>{elem.cardHolder}</p>
                    </div>

                    <div className="newCard__date">
                      <p style={{ color: elem.text }} className='newCard__valid'>VALID TRHRU</p>
                      <p style={{ color: elem.text }} className='newCard__year'>{elem.valid}</p>
                    </div>


                  </div>

                </article>
              )
            }
            return null;
          })
          : null}





      </div>





      <div className="stack">

        {cardStack}

        {localStorageCards ?

          reverseOb.map((elem) => {
            if (reverseOb.length > 0 && cardStackRedux.length == 0) {
              return (


                <article style={{ background: elem.vendor }} key={elem.id} className='newStack'>


                  <div className="newCard__Logos">
                    <img src={elem.chip} alt="chip" />
                    <p onClick={() => { replaceActiveCard(elem) }} className='activate'>Activate</p>
                    <div className="logNButton">
                      <img className='logo' src={elem.logo} alt="logo" />
                      <button onClick={() => { deleteCard(elem) }} className='delButton'>x</button>
                    </div>
                  </div>

                  <p style={{ color: elem.text }} className='newCard__number'>{elem.cardNumber}</p>

                  <div className="newCard__info">

                    <div className="newCard__personalInfo">
                      <p style={{ color: elem.text }} className='newCard__cardholder'>CARDHOLDER NAME</p>
                      <p style={{ color: elem.text }} className='newCard__name'>{elem.cardHolder}</p>
                    </div>

                    <div className="newCard__date">
                      <p style={{ color: elem.text }} className='newCard__valid'>VALID TRHRU</p>
                      <p style={{ color: elem.text }} className='newCard__year'>{elem.valid}</p>
                    </div>


                  </div>

                </article>
              )
            }
            return null;
          })
          : null}



      </div>
      <button className='activeButtom' onClick={() => { navigate('/') }}>ADD A NEW CARD</button>
    </>
  )
}

export default CardStack