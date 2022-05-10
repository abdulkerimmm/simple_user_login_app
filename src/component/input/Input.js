import React from 'react'
import propTypes from 'prop-types'
import { type } from '@testing-library/user-event/dist/type'
import './Input.css'

const Input = ({value,placeholder,type,onChange}) => {
  return (
    <div>
      
        <input className="sinifismi" value={value} type={type} placeholder={placeholder} onChange={onChange}/>
 

    </div>
  )
}

Input.propTypes={
  value: propTypes.string.isRequired,
  placeholder: propTypes.string,
  type: propTypes.string,
  onchange: propTypes.func.isRequired
}

Input.defaultProps={
  placeholder:"degeriniz nedir",
  type:"text" 
}

export default Input