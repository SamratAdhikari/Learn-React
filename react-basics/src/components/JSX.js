import React from "react";

export const CompWithJSX = () => {
    return (
        <div className='someclass' id='someid'>
            This is component with JSX
        </div>
    )
}

export const CompWithoutJSX = () => {
    return React.createElement('div', {id: 'someid', className: 'someclass'}, React.createElement('span', null, 'This is component without JSX'));
}
