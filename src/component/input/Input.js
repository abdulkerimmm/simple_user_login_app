import React from 'react'
import propTypes from 'prop-types'
import './Input.css'

const Input = ({value,placeholder,type,OnceChange}) => {
  return (
    <div>
      
        <input className="sinifismi" value={value} type={type} placeholder={placeholder} onChange={OnceChange}/>
 

    </div>
  )
}

Input.propTypes={
  value: propTypes.string.isRequired,
  placeholder: propTypes.string,
  type: propTypes.string,
  OnceChange: propTypes.func.isRequired
}

Input.defaultProps={
  placeholder:"degeriniz nedir",
  type:"text" 
}

export default Input