import { MdAutoDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClick }) {

return (
  <div className="container">
  <div className="row myRow">
    <div className="col-6">
       {todoName}
      {/* <input type="text" value="Buy Milk" readOnly /> */}
    </div>
    <div className="col-4">
      {todoDate}
      {/* <input type="date" value="2026-06-18" readOnly /> */}
    </div>
    <div className="col">
      <button type="button" className="btn btn-success myButton1" onClick = {() => onDeleteClick(todoName)}><MdAutoDelete/></button>
    </div>
  </div>
</div>
);
}

export default TodoItem;