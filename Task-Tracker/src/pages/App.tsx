import { useState } from 'react';
import Formulario from '../components/Formulario';
import style from './style.module.scss';
import { ITarefa } from '../types/tarefas';
import Cronometro from '../components/Cronometro';
import Lista from '../components/Lista';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
