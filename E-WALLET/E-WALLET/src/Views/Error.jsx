import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './err.css'

function Error() {

    const navigate = useNavigate();


    useEffect(() => {

        setTimeout(() => {
            navigate('/')
          }, "3000");

    },[])




  return (

    <div className='errDiv'>

      <p>Wallet is empty, redirecting you...

      </p>
        <button className='errBtn' onClick={() => {navigate('/')}} >GO NOW!</button>
    </div>
    

  )

}



export default Error