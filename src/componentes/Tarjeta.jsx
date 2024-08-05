/* eslint-disable */

import React from 'react';

const Tarjeta = ({ id, title, completed }) => {
  return (
    <React.Fragment>
    <div className="tarjeta">
        <input type="checkbox" defaultChecked={completed} id={`list${id}`} className="checkbox" />
        <label className="checkLabel" htmlFor={`list${id}`}>{ title }</label>
    </div>
    </React.Fragment>
  )
}

export default Tarjeta;