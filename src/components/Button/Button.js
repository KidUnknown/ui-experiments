import React from 'react';

import './Button.css';

const Button = ({text, click, styleClass}) =>  (
    <button 
        onClick={ click }
        className={ styleClass }
    >
    {text}
    </button>
)

export default Button;