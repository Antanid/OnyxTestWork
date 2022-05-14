import React from 'react';


function Buttons(props) {
  return (
    <button onClick={props.Click} className="base__button__moreInf open-popup-exc">{props.children}</button>
  )
}



export default Buttons