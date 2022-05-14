import React from 'react'

function FirstLine({Line}) {
  return (
    <div className="col-lg-1">
    <img className="base__line" src={Line} alt="line" />
</div>
  )
}

export default FirstLine