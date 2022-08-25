import { useEffect, useState } from "react";
const List = () => {
  const [taskList, setTaskLists] = useState([]);

  //this just outputs the current task list everytime the component rerenders
  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  //this is a function which will update tasks done property
  const updateDoneTasks = (id) => {
    //creates a new list based off the one in state
    const newTaskList = [...taskList];
    //finds the item in the list which matches the id paraemter
    const taskIndex = newTaskList.findIndex((task) => task.id === id);
    //flips the done value
    newTaskList[taskIndex].done = !newTaskList[taskIndex].done;
    //sets the state to the new taskList
    setTaskLists(newTaskList);
  };

  //this is a function to handle form submit
  const handleList = (e) => {
    e.preventDefault();
    //create a new task object, using randomly generated id and a value of the input in the dom
    const newTask = {
      id: Math.random().toString(16).slice(2),
      taskName: document.getElementById("input").value,
      done: false,
    };

    //sets the state to the taskList to include the new task (uses callback function because we use the current state in oput set state function)
    setTaskLists((taskList) => [...taskList, newTask]);
    //sets the value of the input in the dom back to nothing
    document.getElementById("input").value = "";
  };

  //uncontrolled input because its value is not derived from state
  return (
    <>
      <form onSubmit={handleList}>
        <input type="text" placeholder="add task" id="input"></input>
        <ul id="listPlace">
          {
            //loops through tasks every render passing down state and "updateDoneTasks" callback function
            taskList.map((item, index) => (
              <ListItem
                key={item.id}
                item={item}
                index={index}
                updateDoneTasks={updateDoneTasks}
              />
            ))
          }
        </ul>
      </form>
    </>
  );
};

const ListItem = (props) => {
  const { item, index, updateDoneTasks } = props;

  //this function gets call on every change of the checkbox
  const handleOnChange = (e) => {
    updateDoneTasks(item.id);
  };

  //controlled checkbox because "checked" is derived from state
  return (
    <li>
      <div id="listItem">
        <input
          type="checkbox"
          id={`${item.taskName}-input-${index}`}
          name={item.taskName}
          checked={item.done}
          onChange={handleOnChange}
        />
        <label htmlFor={`${item.taskName}-input-${index}`}>
          {item.taskName}
        </label>
      </div>
    </li>
  );
};

export default List;
