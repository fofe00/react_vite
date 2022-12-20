import TaskItem from "./taskItem";

const TaskList = ({
  taskArray,
  deleteTask,
  editTask,
}: {
  taskArray: Array<any>;
  deleteTask: Function;
  editTask: Function;
}) => {
  return (
    <div className="w-1/2 mt-8">
      {taskArray.map((item, index) => {
        return (
          <TaskItem
            title={item.title}
            desc="sdss"
            key={index}
            index={index}
            deleteTask={deleteTask}
            editTask={editTask}
          ></TaskItem>
        );
      })}
    </div>
  );
};

export default TaskList;
