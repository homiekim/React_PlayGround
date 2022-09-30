import React from "react";
import User from "./components/user";
import UserList from "./components/user-list";
import { UserProvider } from "./context/uset";

function App() {
  return (
    <UserProvider>
      <UserList />
      <hr />
      <User />
    </UserProvider>
  );
}

export default App;
