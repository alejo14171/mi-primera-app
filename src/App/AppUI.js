import React from "react";
import "./App.css";
// Contexto
import { TodoContext } from "../TodoContext";
// Componentes
import { TodosLoading } from "../TodosLoading";
import { TodoError } from "../TodoError";
import { TodosEmpty } from "../EmptyTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
// Modal
import { Modal } from "../Modal";
import { Todoform } from "../TodoForm";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodoError error={error}/>}
        {loading && <TodosLoading />}
        {!loading && !searchedTodos.length && <TodosEmpty />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
        <Modal>
          <TodoForm />
        </Modal>
      

      {/* <CreateTodoButton 
        setOpenModal={setOpenModal} 
        openModal={openModal} 
      /> */}
    </React.Fragment>
  );
}

export { AppUI };
