import { useState } from "react";

const Todoform = ({
  addTask,
  setTodoToForm,
  todoForm,
  indexForm,
  setIndexForm,
}: {
  addTask: any;
  setTodoToForm: any;
  todoForm: any;
  indexForm: any;
  setIndexForm: any;
}) => {
  //  const [taskTitle, setTaskTitle] = useState(dataToUpdate);

  const updateTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setTodoToForm(event.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    addTask(todoForm, indexForm);
    setTodoToForm("");
    setIndexForm(-1);
  };

  return (
    <div className="w-full flex justify-center">
      <form onSubmit={handleSubmit}>
        <input
          className="py-2 bg-slate-100 placeholder:text-slate-700 focus:border-2 focus:border-cyan-400 pl-2 rounded"
          placeholder="title name"
          type="text"
          name="title"
          id="title"
          onChange={updateTask}
          value={todoForm}
        />
        <button
          type="submit"
          className="bg-blue-600 rounded px-5 py-2 ml-2 text-white"
        >
          Save
        </button>
      </form>
    </div>
  );
};
export default Todoform;
