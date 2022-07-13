import { Tarefa } from '../../types/tarefa';
import Item from './Item';
import style from './lista.module.scss';

function Lista({ tarefas }: { tarefas: Tarefa[] }){  
    return (
      <aside className={style.listaTarefas}>
        <h2> Estudos do dia </h2>
        <ul>
            {tarefas.map((item, index) => (
              <Item 
                key={index}
                //tarefa={item.tarefa}
                //tempo={item.tempo}
                {...item}
              />
            ))}
         </ul>
      </aside>
    )
  }

export default Lista;