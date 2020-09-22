// main imports
import React, { useEffect, useState } from 'react';

// API imports
import { createTodo, deleteTodo } from '../../graphql/mutations';
import { listTodos } from '../../graphql/queries';


// css
import './Todos.css'

// Amplify imports
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import aws_exports from '../../aws-exports';
Amplify.configure(aws_exports);


// start coding ... 
const initialState = { name : '', description : ''};

const Todos = () => {
    const [formState, setFormState] = useState(initialState);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, [])

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function fetchTodos() {
        try {
            const todoData = await API.graphql(graphqlOperation(listTodos))
            const todos = todoData.data.listTodos.items
            setTodos(todos)
        } catch (err) { console.log('error fetching todos') }
    }

    async function addTodo(e) {
        e.preventDefault();
        try {
            if (!formState.name || !formState.description) return
            const todo = { ...formState }
            setTodos([...todos, todo])
            setFormState(initialState)
            await API.graphql(graphqlOperation(createTodo, {input: todo}))
        } catch (err) {
        console.log('error creating todo:', err)
        }
    }

    async function deleteItem(todo){
        try{
            console.log(todo);
            await API.graphql(graphqlOperation(deleteTodo, {input: todo}))
        } catch (err){
            console.err(err);
        }

    }

  return (
    <div style={styles.container}>
        <h2>Dynlab To-Do's</h2>
        <form onSubmit={addTodo} style={styles.form}>
            <input
                onChange={event => setInput('name', event.target.value)}
                style={styles.input}
                value={formState.name} 
                placeholder="Name"
            />
            
            <input
                onChange={event => setInput('description', event.target.value)}
                style={styles.input}
                value={formState.description}
                placeholder="Description"
            />

            <button style={styles.button} type='submit'>Create To-do</button>
      </form>
    
        {
            todos.map((todo, index) => (
                <div className="reminder-tasks">
                <li className="list-group-item reminder-items" key={todo.id}>
                    <div className="list-item"> 
                        <div><b>{todo.name}</b></div>
                        <div><em>{todo.description}</em></div>
                    </div>
                    <div className="list-item delete-button" onClick={() => deleteItem(todo)}>
                        &#x2715;
                    </div>
                </li>
              </div>
            ))
        }
      

    </div>

  );
}


const styles = {
  form: { width: 340, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center'},
  container: { width: 380, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default Todos;