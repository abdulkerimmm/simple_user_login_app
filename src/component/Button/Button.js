import React from 'react'
import propTypes from 'prop-types'
import './Button.css'

 const Button = ({text,onClick}) => {
  return (
    <div>
       <button className='button-cssi' onClick={onClick} >{text}</button>
    </div>
  )
}

Button.propTypes={
    text: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired
}

Button.defaultProps={
    text: "click",

}

export default Button
