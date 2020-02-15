import React from 'react';

import Button from '../Button/Button';

const Controls = ({controlA, controlB}) => {

    return (
        <div className="controls">
            <Button styleClass="prev arrows" text="prev" click={ controlB }/>
            <Button styleClass="next arrows" text="next" click={ controlA }/>
        </div>
    )
}
export default Controls