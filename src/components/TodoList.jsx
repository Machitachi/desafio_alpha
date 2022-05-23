// import React, { useState } from "react";
// import Task from "./Task";

// function TodoList() {

//   return (
//     <section className="container">
//       <label htmlFor="input-group" className="labelforboard">
//         Cadastrar uma tarefa
//       </label>
//       <section className="input-group">
//         <div className="input-each">
//           <label htmlFor="tarefa">Sua Tarefa</label>
//           <input
//             name="tarefa"
//             value={newTask}
//             onInput={(event) => setNewTask(event.target.value)}
//           />
//           <br />
//         </div>
//         <div className="input-each">
//           <label htmlFor="data">Prazo</label>
//           <input
//             name="data"
//             value={newDate}
//             type="date"
//             onInput={(event) => setNewDate(event.target.value)}
//           />
//           <br />
//         </div>
//         <div className="input-each">
//           <label htmlFor="status">Status</label>
//           <input
//             name="status"
//             value={newStatus}
//             onInput={(event) => setNewStatus(event.target.value)}
//           />
//           <br />
//         </div>
//       </section>
//       <button
//         type="submit"
//         onClick={() => AddTask(newTask, newDate, newStatus)}
//       >
//         Inserir Tarefa
//       </button>

//     </section>
//   );
// }

// export default TodoList;

import React from "react";
import { useState } from "react";
import Board from "./Board";
import Task from "./Task";

const TodoList = () => {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("");
  const [obj, setObj] = useState("");
  
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setObj({ description, deadline, status });
  };

  console.log(status);
  return (
    <>
      <section className="container">
        <label htmlFor="input-group" className="labelforboard">
          Cadastrar uma tarefa
        </label>

        <form onSubmit={handleSubmit}>
          <div className="form-box">
            <div className="register-box">
              <fieldset className="input-register">
                <legend>Sua tarefa</legend>
                <input type="text" onChange={handleDescription} />
              </fieldset>
            </div>
            <div className="register-box">
              <fieldset className="input-register">
                <legend>Prazo</legend>
                <input
                  type="date"
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </fieldset>
            </div>
            <div className="register-box">
              <fieldset className="input-register">
                <legend>Selecione o status</legend>
                <select
                  name=""
                  id=""
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value=""></option>
                  <option value="A Fazer">A Fazer</option>
                  <option value="Fazendo">Fazendo</option>
                  <option value="Finalizado">Finalizado</option>
                </select>
              </fieldset>
            </div>
          </div>

          <label htmlFor="board" className="labelforboard">
            Quadro de Tarefas
          </label>

          <div className="register-box">
            <input
              type="submit"
              className="register-btn"
              value="Inserir Tarefas"
              // onClick={() => AddTask(newTask, newDate, newStatus)}
            />
          </div>
        </form>

        <Board
          description={obj.description}
          deadline={obj.deadline}
          status={obj.status}
        />
      </section>
    </>
  );
};

export default TodoList;
