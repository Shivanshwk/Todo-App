import { useState } from "react";
import { MdAddAlert } from "react-icons/md";

function AddTodo({onNewItem}){

const [todoName, setTodoName] = useState("");
const [todoDate, setDueDate] = useState("");

const handleNameChange = (event) => {
  setTodoName(event.target.value);
};

const handleDateChange = (event) => {
    setDueDate(event.target.value);
};

const handleAddButtonClicked = () => {
  onNewItem(todoName, todoDate);
  setDueDate("");
  setTodoName("");
};

return  (
<div className="container">
  <div className="row myRow">
    <div className="col-6">
      <input type="text" placeholder="Enter task..." value={todoName} onChange={handleNameChange} />
    </div>
    <div className="col-4">
      <input type="date" value={todoDate} onChange = {handleDateChange} />
    </div>
    <div className="col">
      <button type="button" className="btn btn-success myButton" onClick = {handleAddButtonClicked}><MdAddAlert /></button>
    </div>
  </div>
</div>);
}

export default AddTodo;