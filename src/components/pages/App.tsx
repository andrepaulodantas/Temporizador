import React, { useState } from 'react';
import { Tarefa } from '../../types/tarefa';
import Cronometro from '../Cronometro';
import Formulario from '../Formulario';
import Lista from '../Lista/App';
import style from './App.module.scss';


function App() {
  const [tarefas, setTarefas] = useState<Tarefa[] | []>([]);
  return (
     <div className={style.AppStyle}>
       <Formulario setTarefas={setTarefas} />
       <Lista tarefas={tarefas}/>
       <Cronometro />
     </div>
  );
 }

 export default App;