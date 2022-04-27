import axios from 'axios';
import { NextPage } from 'next';
import { ChangeEvent, FormEvent, Fragment, useCallback, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

const getTodos = async () => {
  const {data} = await axios.get<Todo[]>("http://localhost:5000/todos");
  return data;
}

const addTodo = async (todo:string) => {
  const { data } = await axios.post<Todo>("http://localhost:5000/todos", {
    todo,
    done: false,
  });
  return data;
};


const TodosPage : NextPage = () => {
  const [todo, setTodo] = useState("");

  const queryClient = useQueryClient();

  const {data:todos, isLoading, isError, error} = useQuery<Todo[], Error>("todos", getTodos, {
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation(addTodo, {
    onSuccess: (data) =>{
      queryClient.setQueryData<Todo[]>("todos", (prevData) => {
        if(!prevData){
          return []
        }
        return [... prevData, {id: data.id, todo: data.todo, done: false}];
      })
    },
  });



  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    mutate(todo);
    setTodo("");
  },[mutate, todo]);

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>할일 : </label>
        <input
          type='text'
          value={todo}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTodo(e.target.value)
          }
        />
        <button type='submit'>작성</button>
      </form>
      <br />
      <div>
        {isLoading? (<div>Loading ...</div>):(
          todos?.map((todo) => (
            <Fragment key={todo.id}>
              <div>ID: {todo.id}</div>
              <div>할 일: {todo.todo}</div>
              <br />
              <hr />
            </Fragment>
          ))
        )}
      </div>
    </>
  )
}

export default TodosPage;