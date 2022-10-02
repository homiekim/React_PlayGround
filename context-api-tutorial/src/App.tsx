import React from "react";
import TodoList from './components/todo-list';
import User from "./components/user";
import UserList from "./components/user-list";
import TodoProvider from './context/todo';
import { UserProvider } from "./context/uset";

function App() {
  return (
    <>
      <UserProvider>
        <UserList />
        <hr />
        <User />
      </UserProvider>
      <hr/>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </>
  );
}

export default App;
