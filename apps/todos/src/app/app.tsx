import React, { useEffect, useState} from 'react';
import StyledApp from './style';
import { ReactComponent as Logo } from './logo.svg';
import { Todo } from '@cimadent-nx/data';
import { Todos } from '@cimadent-nx/ui';


export const App = () => {
  const [todos, setTodos] = useState<Todo[]>(
    [
      { title : 'Todo 1'},
      { title : 'Todo 2'}
    ]
  );

  useEffect(() => {
    fetch('/api/todos')
      .then(_ => _.json())
      .then(setTodos);
  }, [])

  const addTodo = () => {
    fetch('/api/addTodo', {
      method: 'POST',
      body: ''
    })
      .then( _ => _.json())
      .then(newTodo => {
        setTodos([...todos, newTodo])
      })
  } 

  return (
    <StyledApp>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to todos!</h1>
      </header>
      <main>
        <>
          <h1> List</h1>
          <Todos todos={todos} />
          <button id={'add-todo'} onClick={addTodo}>
              Add Todo
            </button>
        </>
      </main>
    </StyledApp>
  );
};

export default App;
