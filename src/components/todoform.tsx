import { useState } from "react";

const Todoform = ({
  addTask,
  dataToUpdate,
}: {
  addTask: any;
  dataToUpdate: any;
}) => {
  const [task, setTask] = useState(dataToUpdate);

  const updateTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setTask({ title: event.target.value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    addTask(task);
    setTask({ title: "", done: false, index: -1 });
  };

  return (
    <div className="w-full flex justify-center">
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="" value={task.index} />
        <input
          className="py-2 bg-slate-100 placeholder:text-slate-700 focus:border-2 focus:border-cyan-400 pl-2 rounded"
          placeholder="title name"
          type="text"
          name="title"
          id="title"
          onChange={updateTask}
          value={task.title}
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
