import React from 'react'
import './styles.css'

function ClearButton(props) {
  return (
    <div className="boton-clear"
      onClick={props.handleClear}>
      {props.children}
    </div>
  )
}

export default ClearButton