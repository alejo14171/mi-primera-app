import React from "react";
import { TodoContext } from '../TodoContext';
import './Todoform.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
      addTodo,
  } = React.useContext(TodoContext);

  const onAdd = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
  };
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  };
  
  const onClickAddButton = () => {
    setTimeout(() => {setNewTodoValue("")} ,10)
  };

  return (
    <form onSubmit={onAdd} className="form">
      <h1 className="form__title">Create a new Todo!</h1>
      <textarea 
        className="form__TextArea"
        placeholder="Write your new Todo"
        value={newTodoValue}
        onChange={onChange}
      />

      <div className="divButtons">
        
        <button
          className="form__button"
          type="submit"
          onClick={onClickAddButton}
        >
            Add Todo
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
