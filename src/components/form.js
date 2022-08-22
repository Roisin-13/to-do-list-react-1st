import { useState } from "react";
const ListItem = () => {
const [tasks, setTasks] = useState("");
const [taskList, setTaskLists] = useState([]);

// DO I NEED?
    // const handleListItem = (e) => {
    //     e.preventDefault();
    //     console.log(e.type);
    //     let list = e.target.value;
    //     console.log(list);
    //     setTasks(e.target.value);
    //     //e.preventDefault();
    // }
const handleList = (e) => {
    e.preventDefault();
    setTaskLists(taskList => [...taskList, tasks]);
    let list = tasks;
    console.log(list);
    console.log(taskList.toString());
    //document.getElementById("input").value="";
}


 return (
     <>
     <form>
             <input type="text" placeholder="task" onChange={(e) => setTasks(e.target.value)} value={tasks} id="input"></input>
             <button type="submit" onClick={handleList}>ADD</button>
     </form>
     </>
 );
}
export default ListItem;