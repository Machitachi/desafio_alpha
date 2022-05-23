import React from "react";
import { useState } from "react";
import Task from "./Task";

const Board = ({ description, deadline, status }) => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newDate, setNewDate] = useState("");
  const [dates, setDates] = useState([]);
  const [newStatus, setNewStatus] = useState("");
  const [statuss, setStatuss] = useState([]);
  let taskCard = {};

  function AddTask(task, date, sstatus, index) {
    let allTasks = tasks;
    allTasks.push(task);
    setTasks(allTasks);
    let allDates = dates;
    allDates.push(date);
    setDates(allDates);
    let allStatuss = statuss;
    allStatuss.push(sstatus);
    setStatuss(allStatuss);
    taskCard = {
      tarefa: task,
      data: date,
      status: sstatus,
    };

    ClearInput();
  }

  function ClearInput() {
    setNewTask("");
    setNewDate("");
    setNewStatus("");
  }

  function RemoveTask(index) {
    let removeTask = tasks.filter((t, i) => i != index);
    setTasks(removeTask);
    let removeDate = dates.filter((t, i) => i != index);
    setDates(removeDate);
    let removeStatuss = statuss.filter((t, i) => i != index);
    setStatuss(removeStatuss);
  }

  function EditTask(index) {
    setNewTask(tasks[index]);
    setNewDate(dates[index]);
    setNewStatus(statuss[index]);
    RemoveTask(index);
  }

  console.log(description, deadline, status);
  return (
    <>
      <h2 className="title-register">Quadro de Tarefas</h2>
      <div className="board-box board">
        <div className="task-status">
          <span className="red">A Fazer</span>
          {status === "A Fazer" ? (
            <div className="card-box-red">
              {" "}
              <p>Descrição:</p> {description} <p>Prazo</p> {deadline}{" "}
              <section className="task-list-red">
                {tasks.map((task, index) => (
                  <Task
                    task={task}
                    index={index}
                    removeTask={RemoveTask}
                    editTask={EditTask}
                    key={index}
                  />
                ))}
              </section>
            </div>
          ) : null}
        </div>
        <div className="task-status">
          <span className="yellow">Fazendo</span>
          {status === "Fazendo" ? (
            <div className="card-box-yellow">
              {" "}
              <p>Descrição:</p> {description} <p>Prazo</p> {deadline}
              <section className="task-list-yellow">
                {tasks.map((task, index) => (
                  <Task
                    task={task}
                    index={index}
                    removeTask={RemoveTask}
                    editTask={EditTask}
                    key={index}
                  />
                ))}
              </section>
            </div>
          ) : null}
        </div>
        <div className="task-status">
          <span className="green">Finalizado</span>
          {status === "Finalizado" ? (
            <div className="card-box-green">
              {" "}
              <p>Descrição:</p> {description} <p>Prazo</p> {deadline}{" "}
              <section className="task-list-green">
                
                {tasks.map((task, index) => (
                  <Task
                    task={task}
                    index={index}
                    removeTask={RemoveTask}
                    editTask={EditTask}
                    key={index}
                  />
                ))}
              </section>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Board;
