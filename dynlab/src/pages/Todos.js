// main imports
import React, { useEffect, useState } from 'react';

// API imports
import { createTodo, deleteTodo } from '../graphql/mutations';
import { listTodos } from '../graphql/queries';

// Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

// Amplify imports
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import aws_exports from '../aws-exports';
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

    async function addTodo() {
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

    async function deleteTodo(todo){
        try{
            console.log(todo);
            //await API.graphql(graphqlOperation(deleteTodo, {input: todo}))
        } catch (err){
            console.err(err);
        }

    }

  return (
    <div style={styles.container}>
      <h2>Dynlab To-Do's</h2>
      
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

      <button style={styles.button} onClick={addTodo}>Create To-do</button>
      

      <List>
        {
            todos.map((todo, index) => (
                <ListItem key={todo.id ? todo.id : index} dense button>
                    <Checkbox tabIndex={-1} disableRipple />
                    <ListItemText primary={todo.name} />
                    <ListItemText secondary={todo.description} />
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label="Delete"
                            onClick={() => {
                                deleteTodo(todo);
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))
        }
      </List>

    </div>

  );
}


const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default Todos;