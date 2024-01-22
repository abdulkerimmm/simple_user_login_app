import React from 'react';
import propTypes from 'prop-types'
import './Form.css';


const Form= ({children}) => {
  return (
    <div className='custom-form'>
      {children}
    </div>
  )
}

Form.propTypes={
    children: propTypes.node
    
}

Form.defaultProps={
    children: null,

}

export default Form



