/* eslint-disable */
import React, { useRef, useId } from 'react';

const Agregar = ({ guardarTarea }) => {

  const idCampo = useId();
  const campo = useRef(null);

  const tomarDato = () => {
    console.log(campo.current.value);
    guardarTarea(campo.current.value);
  }

  return (
    <div className='agregar'>
        <label htmlFor={idCampo}>Agregar:</label>
        <input type="text" ref={campo} id={idCampo} />
        <input type="button" value="Agregar" onClick={tomarDato} />
    </div>
  )
}

export default Agregar;