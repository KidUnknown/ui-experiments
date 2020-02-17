import React from 'react';

import Button from '../Button/Button';

const Controls = ({controlA, controlB, uiConfig}) => {

    const UI = {uiConfig} ? 
    <div className="controls">
        <Button styleClass="prev arrows" text="prev" click={ controlB }/>
        <Button styleClass="next arrows" text="next" click={ controlA }/>
    </div>
    : <div></div>
        
    return (
        UI
    );
}
export default Controls