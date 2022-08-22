
const ListItem = () => {
    const handleListItem = (e) => {
        console.log(e.type);
        let list = e.target.value;
        console.log(list);
        //e.preventDefault();
    }

 return (
     <>
         <input type="text" placeholder="add task" onChange={handleListItem} ></input>
     </>
 );
}
export default ListItem;