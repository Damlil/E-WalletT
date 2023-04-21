import React from 'react'
import chip__dark from '../assets/chip-dark.svg'
import chip__light from '../assets/chip-light.svg'
import vendor__bitcoin from '../assets/vendor-bitcoin.svg'
import vendor__blockchain from '../assets/vendor-blockchain.svg'
import vendor__evil from '../assets/vendor-evil.svg'
import vendor__ninja from '../assets/vendor-ninja.svg'
import './card.scss'



const btclogo = `${vendor__bitcoin}`
const blockchainLogo = `${vendor__blockchain}`
const evilLogo = `${vendor__evil}`
const ninjaLogo = `${vendor__ninja}`
const lightChip = `${chip__light}`
const darkChip = `${chip__dark}`



function Card ( props ) {

  let cardInfo = {
    card: '',
    logo: btclogo,
    background: '',
    chip: darkChip,
    
  }

  if ( props.cardVendor === '#FFAE34') {
    cardInfo =
    {
      card: 'btc',
      logo: btclogo,
      background: '#FFAE34',
      chip: darkChip
    }

  }  else if(props.cardVendor === '#8B58F9') {
    cardInfo = 
    {
      card: 'blockchain',
      logo: blockchainLogo,
      background: '#8B58F9',
      chip: darkChip
    }

  } else if(props.cardVendor === '#F33355') {
    cardInfo = 
    {
      card: 'evil',
      logo: evilLogo,
      background: '#F33355',
      chip: darkChip
    }

  }else if(props.cardVendor === '#222222') {
    cardInfo = 
    {
      card: 'ninja',
      logo: ninjaLogo,
      background: '#222222',
      font: 'white',
      chip: lightChip
    }
  }
  

  const color = { background: (cardInfo.background)}
  const fontColor = { color : (cardInfo.font)}



  return (

    <article style={color} className='newCard'>

      <div className="newCard__Logos">
        <img src={cardInfo.chip} alt="chip" />
        <img src={cardInfo.logo} alt="logo" />
      </div>

      <p style={fontColor} className='newCard__number'>{props.cardNumber}</p>

      <div style={fontColor} className="newCard__info">

        <div className="newCard__personalInfo">
          <p className='newCard__cardholder'>CARDHOLDER NAME</p>
          <p className='newCard__name'>{props.cardHolder}</p>
        </div>

        <div className="newCard__date">
          <p className='newCard__valid'>VALID TRHRU</p>
          <p className='newCard__year'>{props.valid}</p>
        </div>


      </div>

    </article>
  )
}

export default Card

