import { useState } from "react";

import TaskItem from "./components/taskItem";
import TaskList from "./components/taskList";
import Todoform from "./components/todoform";

function App() {
  let localTodo = {
    title: "task 12 ",
    done: false,
  };
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([localTodo]);
  const [todoToUpdate, setTodoToUpdate] = useState({
    index: -1,
    title: "",
    done: false,
  });
  const addTask = (item: any) => {
    let lTodo = [...todos];
    lTodo.push({ title: item.title, done: false });
    setTodos(lTodo);
  };
  const deleteTask = (index: number) => {
    let lTodo = [...todos];
    lTodo.splice(index, 1);
    setTodos(lTodo);
  };
  const editTask = (index: number, title: string) => {
    setTodoToUpdate({ index: index, title: title, done: false });
  };

  return (
    <div className="flex  flex-col items-center w-full">
      <h1 className="text-3xl text-gray-800 py-8">Todo app</h1>
      <Todoform addTask={addTask} dataToUpdate={todoToUpdate}></Todoform>
      <TaskList
        taskArray={todos}
        deleteTask={deleteTask}
        editTask={editTask}
      ></TaskList>
    </div>
  );
}

export default App;
