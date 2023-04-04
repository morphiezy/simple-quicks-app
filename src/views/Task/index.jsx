import { useState } from "react";
import Dropdown from "./Dropdown";
import { Button, Loading } from "../../components";
import Accordion from "./Accordion";
import { useEffect } from "react";

const Task = () => {
  const [loading, setLoading] = useState(true);
  const [filterTask, setFilterTask] = useState([]);
  const [tasks, setTasks] = useState([]);

  const fetchingTasks = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.jsonbin.io/v3/b/642b9458ebd26539d0a400ce",
      );
      const { record } = await response.json();
      setTasks(record);
    } catch (error) {
      alert("Failed fetching chats...");
    }

    setLoading(false);
  };

  const handleTaskUpdate = (id, key, value) => {
    const newTasks = [...tasks].map((task) => {
      return task.id === id ? { ...task, [key]: value } : task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = [...tasks].filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleFilter = (type) => {
    const newTask = JSON.parse(JSON.stringify(tasks));
    const filteredData =
      type !== "all" ? newTask.filter((task) => task.completed === type) : [];
    setFilterTask(filteredData);
  };

  const addNewTask = () => {
    const newTask = JSON.parse(JSON.stringify(tasks));
    const random = Math.floor(Math.random() * 100) + 1;
    
    const data = {
      id: `task-${random}`,
      title: '',
      description:"",
      deadline: null,
      completed: false,
    }

    newTask.push(data);

    setTasks(newTask);
  }

  useEffect(() => {
    fetchingTasks();
  }, []);

  return (
    <>
      <div className="w-full h-auto flex justify-between items-center py-6 px-8">
        <Dropdown updateList={handleFilter} />
        <Button type="button" value="New Task" click={addNewTask}/>
      </div>
      {loading ? (
        <Loading text="Tasks" />
      ) : tasks.length ? (
        <div className="mb-6 px-4 mx-4 custom-scroll-bar h-auto overflow-y-auto">
          {filterTask.length
            ? filterTask.map((task) => (
                <Accordion
                  key={task.id}
                  taskData={task}
                  updateTask={handleTaskUpdate}
                  deleteTask={deleteTask}
                />
              ))
            : tasks.map((task) => (
                <Accordion
                  key={task.id}
                  taskData={task}
                  updateTask={handleTaskUpdate}
                  deleteTask={deleteTask}
                />
              ))}
        </div>
      ) : (
        <p>Task Empty</p>
      )}
    </>
  );
};

export default Task;
