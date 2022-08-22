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

    const handleListItem = (e) => {
        e.preventDefault();
        setTasks(e.target.value);
        document.getElementById("input").value = "";
        //e.preventDefault();
    }


const handleList = (e) => {
    e.preventDefault();
    setTaskLists([...taskList, tasks]);
    console.log(tasks);
    console.log(taskList);
    document.getElementById("input").value="";
    let LP = document.getElementById("listPlace");
    // LP.innerHTML = taskList;
        LP.innerHTML = taskList.map(i => `<li>${i}</li>`).join('');

}

    // onChange = {(e) => setTasks(e.target.value)} 
 return (
     <>
         <form onSubmit={handleList}>
             <input type="text" placeholder="add task" onChange={handleListItem} value={tasks} id="input"></input>
             {/* <button type="submit" onClick={handleList}>ADD</button> */}
             <ul id="listPlace"></ul>
     </form>
     </>
 );
}
export default ListItem;