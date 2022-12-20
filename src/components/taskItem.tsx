const TaskItem = ({
  title,
  desc,
  deleteTask,
  index,
  editTask,
}: {
  title: string;
  desc: string;
  deleteTask: Function;
  index: number;
  editTask: Function;
}) => {
  const hadleDelete = (key: number) => {
    deleteTask(key);
  };
  const handleEdit = () => {
    editTask(index, title);
  };
  return (
    <div className="flex flex-row justify-between items-center my-3">
      <p>{title}</p>
      <div>
        <button
          type="button"
          onClick={() => hadleDelete(index)}
          className="bg-red-800 rounded px-5 py-2 ml-2 text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={handleEdit}
          className="bg-blue-800 rounded px-5 py-2 ml-2 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default TaskItem;
