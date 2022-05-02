import React from 'react'

function Buttons({text, Click}) {
  return (
    <button onClick={Click} className="base__button__moreInf open-popup-exc">{text}</button>
  )
}

export default Buttons