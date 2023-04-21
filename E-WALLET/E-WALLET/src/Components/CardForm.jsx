import React from 'react'
import './CardForm.scss'
import { useState} from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addName } from '../actions/actions'


function CardForm() {

  const [selectedCard, setSelectedCard] = useState('bitcoin')

  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('James Bond')
  const [valid, setValid] = useState('')
  const [cvv, setCvv] = useState(0)
  const [vendor, setVendor] = useState('')
  const [logo, setLogo] = useState('')
  const [chip, setChip] = useState('')
  const [textColor, setTextColor] = useState('')





  const dispatch = useDispatch();
  const navigate = useNavigate()


  const setChange = (e) => {

    setSelectedCard(e.target.value.split(' ')[0])
    setVendor(e.target.value.split(' ')[0])
    setLogo(e.target.value.split(' ')[1])
    setChip(e.target.value.split(' ')[2])
    setTextColor(e.target.value.split(' ')[3])

  }


  
  
  ////////////////////////////////////
  
  let newCard = {
    id: 0,
    cardNumber: 0,
    cardHolder: '',
    valid: '',
    cvv: 0,
    vendor: '',
    logo: '',
    chip: '',
    text: ''
  }

  const handleClick = () => {
    newCard.id = Math.floor(Math.random() * 9999999)
    newCard.cardNumber = cardNumber
    newCard.cardHolder = cardHolder
    newCard.valid = valid
    newCard.cvv = cvv
    newCard.vendor = vendor
    newCard.logo = logo
    newCard.chip = chip
    newCard.text = textColor

    if (newCard.cardHolder == 'James Bond' || newCard.valid.length != 4 || newCard.vendor == '' || newCard.cvv == '' || newCard.cardNumber == 'XXXX XXXX XXXX XXXX' || newCard.cardNumber.length != 19) {
      alert('Make sure all field are filleds in correctly!')
      return
    }

    var showList = JSON.parse(localStorage.getItem('showList') || "[]");

    var showList = [];

    var show = newCard

    showList.push(show);
    var finalArr = localStorage.getItem('showList') != undefined ? [...showList, ...JSON.parse(localStorage.getItem('showList'))] : showList;
    localStorage.setItem("showList", JSON.stringify(finalArr));



    dispatch(addName(newCard))

    navigate('/addcard')
  }
////////////////////////////////////





////////////////////

  const regex1 = /[A-Za-z]/

  const [disp, setDisp] = useState('none')

  const cardInput = (e) => {

    setCardHolder(e.target.value)
    let valid = regex1.test(e.target.value)
    if (valid) {
      setDisp('none')
    } else
      setDisp('block')
  }

  ///////////////////






  ///////////////////////////////

  const numberInput = (e) => {

    setCardNumber(e.target.value)
  }

  function cc_format(value) {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }

    return parts.length > 1 ? parts.join(" ") : value;
  }

/////////////////////////////////////////////////






  return (

    <div className="">
      <Card cardVendor={selectedCard} cardNumber={cardNumber} cardHolder={cardHolder} valid={valid} cvv={cvv} />
      <form action='#' className='formInput'>

        <label className='formInput__labelNumber'>CARD NUMBER</label>
        <input onChange={(e) => { (numberInput(e)) }} value={cc_format(cardNumber)} className='formInput__number' type='text' maxLength={19} placeholder='1234 5678 3456 9783' />

        <label className='formInput__labelName'>CARDHOLDER NAME</label>
        <input onChange={(e) => { cardInput(e) }} className='formInput__name' maxLength={21} type="text" placeholder='JOHN DOE' />

        <p style={{ display: disp }} onClick={(e) => { console.log(e.target.className) }} className='errText'>Not valid input</p>

        <div className="formInput__dateContainer">


          <div className="formInput__date">
            <label htmlFor="valid">VALID THRU</label>
            <input onChange={(e) => { (setValid(e.target.value)) }} type="text" placeholder='7/11' />
          </div>

          <div className="formInput__cvv">
            <label htmlFor="cvv">CVV</label>
            <input onChange={(e) => { (setCvv(e.target.value)) }} type="number" placeholder='123' />
          </div>

        </div>

        <label className='vendorInput' htmlFor="vendor">VENDOR</label>
        <select className='vendorInput__select' onChange={setChange} >
          <option value='VENDOR'>VENDOR</option>
          <option value='#FFAE34 /src/assets/vendor-bitcoin.svg /src/assets/chip-dark.svg black'>BITCOIN</option>
          <option value='#8B58F9 /src/assets/vendor-blockchain.svg /src/assets/chip-dark.svg black'>BLOCKCHAIN</option>
          <option value='#F33355 /src/assets/vendor-evil.svg /src/assets/chip-dark.svg blac'>EVIL</option>
          <option value='#222222 /src/assets/vendor-ninja.svg /src/assets/chip-light.svg white'>NINJA</option>
        </select>

        <button type='button' onClick={handleClick} className='formInput__buttom'>ADD CARD</button>

      </form>
    </div>
  )
}

export default CardForm

// onChange={e => setSelectedCard(e.target.value)}