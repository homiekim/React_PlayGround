import React from 'react';
import AllDoneButton from './components/done-button';
import FilteredTodoList from './components/filter-list';
import TodoFilter from './components/todo-filter';
import TodoInput from './components/todo-input';
import TodoList from './components/todo-list';

function App() {
  return (
    <main>
      <TodoInput />
      <TodoList />
      <AllDoneButton />
      <hr />
      <TodoFilter />
      <FilteredTodoList/>
    </main>
  );
}

export default App;
