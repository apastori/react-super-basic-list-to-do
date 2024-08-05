/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Agregar from './Agregar';
import Tarjetas from './Tarjetas';

const Contenido = () => {

  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
    .then(res => res.json())
    .then(datos => {
      console.log(datos);
      setTareas(datos);
    })
    .catch()
  }, [])

  const guardarTarea = (textoTarea) => {
    console.log('Guardar Tarea Contenido');
    let objTarea = {
      'userId': 1,
      'title': textoTarea,
      'completed': false
    }
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(objTarea),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => response.json())
    .then(({ userId, title, completed }) => {
      console.log({ userId, title, completed });
      let idsTareas = tareas.map(tarea => {
        return tarea.id;
      })
      console.log(idsTareas);
      const nuevoId = Math.max(...idsTareas) + 1;
      console.log(nuevoId);
      objTarea = { userId, title, completed, id: nuevoId};
      console.log(objTarea);
      setTareas([...tareas, objTarea]);
    })
  }

  return (
    <div className='contenido'>
        <Agregar guardarTarea={guardarTarea} />
        <Tarjetas
        tareas={tareas}
        />
    </div>
  )
}

export default Contenido;