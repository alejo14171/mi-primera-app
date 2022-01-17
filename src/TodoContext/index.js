import React from "react";
import { useLocalStorage } from "./useLocalStorage";

// Creamos el TodoContext, este tien .Provider y .Consumer como metodos
const TodoContext = React.createContext();

function TodoProvider(props) {
  // nuestro React Hook
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  // Los estados queeeeeeee
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);


  // Logica para buscar ToDos
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  // Logica para completar o eliminar Todos
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    if (newTodos[todoIndex].completed == true) {
      newTodos[todoIndex].completed = false;
      saveTodos(newTodos);
    } else {
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    }
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
      completed: false,
      text
    });
    saveTodos(newTodos);
  }

  // La funcion TodoProvider nos retorna 
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        addTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
