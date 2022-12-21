import { useEffect, useState } from "react";

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
  const [todoForm, setTodoToForm] = useState("");
  const [indexForm, setIndexForm] = useState(-1);
  const addTask = (item: any, index: any) => {
    let lTodo = [...todos];
    if (index != -1) {
      lTodo[index].title = item;
      setTodos(lTodo);
    } else {
      lTodo.push({ title: item, done: false });
      setTodos(lTodo);
    }
  };
  const deleteTask = (index: number) => {
    let lTodo = [...todos];
    lTodo.splice(index, 1);
    setTodos(lTodo);
  };
  const editTask = (index: number, title: string) => {
    setIndexForm(index);
    setTodoToForm(title);
  };

  return (
    <div className="flex  flex-col items-center w-full">
      <h1 className="text-3xl text-gray-800 py-8">Todo app</h1>
      <Todoform
        addTask={addTask}
        setTodoToForm={setTodoToForm}
        todoForm={todoForm}
        indexForm={indexForm}
        setIndexForm={setIndexForm}
      ></Todoform>
      <TaskList
        taskArray={todos}
        deleteTask={deleteTask}
        editTask={editTask}
      ></TaskList>
    </div>
  );
}

export default App;
