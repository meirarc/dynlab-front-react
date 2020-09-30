// main imports
import React, { useEffect, useState } from 'react';

// API imports
import { createTodo, deleteTodo } from '../../graphql/mutations';
import { listTodos } from '../../graphql/queries';

// Amplify imports
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import aws_exports from '../../aws-exports';
Amplify.configure(aws_exports);

// refactory
//Break The UI Into A Component Hierarchy
// * TODO App
//      * Form
//      * Todo Table
//          * CategoryRow
//          * Todo Row 


// alterar formatação bold para style
class TodoCategoryRow extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
          <b>{name}</b>
     </div>
    );
  }
}

// trocar X por icone de lixeira
// mudar style para ficar lado a lado
class TodoItemRow extends React.Component {

    deleteItem(todo){
        const todoDetails = { id: todo.id };

        try{
            API.graphql(graphqlOperation(deleteTodo, {input: todoDetails}))
        } catch (err) { console.err('error creating todo:', err) }
    }

    // acrescentar onclick
    render() {
        const todo = this.props.todo;
        const description = todo.description;

        return (
            <div>
                <em>{description}</em>
                <div onClick={() => this.deleteItem(todo)}>&#x2715;</div>
            </div> 
        );
    }
}

class TodoTable extends React.Component {
  render() {
    const todos = this.props.todos.sort((a, b) => a.name > b.name ? 1 : -1);
    const name = this.props.inputName;
    const description = this.props.inputDescription;

    const rows = [];
    let lastName = null;
    
    
    todos.forEach((todo) => {
        if (todo.name.indexOf(name)=== -1){
            return;
        }

        if (todo.description.indexOf(description)=== -1){
            return;
        }
        
        if (todo.name !== lastName) {
            rows.push(
            <TodoCategoryRow
                name={todo.name}
                key={todo.name} />
            );
        }
        rows.push(
            <TodoItemRow
            todo={todo}
            key={todo.id} />
        );
        lastName = todo.name;
    });

    return (
      <div>
        {rows}
      </div>
    );
  }
}


class TodoForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            inputName: '',
            inputDescription: ''
        };

        this.handlerInputNameChange = this.handlerInputNameChange.bind(this)
        this.handlerInputDescriptionChange = this.handlerInputDescriptionChange.bind(this)
    }

    handlerInputNameChange(e){
        this.props.onInputNameChange(e.target.value);
    }

    handlerInputDescriptionChange(e){
        this.props.onInputDescriptionChange(e.target.value);
    }


    addTodo(e) {
        e.preventDefault();
        try {
            const todo = {name: this.props.inputName, description: this.props.inputDescription}
            if (!todo.name || !todo.description) return
            API.graphql(graphqlOperation(createTodo, {input: todo}))
        } catch (err) { console.err('error creating todo:', err) }
    }

    //add create function on onclick/submit
    render() {
        return (
        <form onSubmit={e => this.addTodo(e)} >
            <input 
                type="text" 
                placeholder="Name..." 
                value={this.props.inputName}
                onChange={this.handlerInputNameChange}
            />
            
            <input 
                type="text" 
                placeholder="Description..." 
                value={this.props.inputDescription}
                onChange={this.handlerInputDescriptionChange}
            />
            
            <button 
                type='submit'>
                    Create To-do
            </button>

        </form>
        );
    }
}

class TodoApplication extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            inputName: '',
            inputDescription: ''
        };

        this.handlerInputNameChange = this.handlerInputNameChange.bind(this);
        this.handlerInputDescriptionChange = this.handlerInputDescriptionChange.bind(this);
    }

    handlerInputNameChange(inputName){
        this.setState({
            inputName: inputName
        });
    }

    handlerInputDescriptionChange(inputDescription){
        this.setState({
            inputDescription: inputDescription
        });
    }

    render() {
        const todos = this.props.todos;

        return (
        <div>
            <TodoForm 
                inputName={this.state.inputName}
                inputDescription={this.state.inputDescription}
                onInputNameChange={this.handlerInputNameChange}
                onInputDescriptionChange={this.handlerInputDescriptionChange}
            />

            <TodoTable 
                todos={todos} 
                inputName={this.state.inputName}
                inputDescription={this.state.inputDescription}
            />
        </div>
        );
    }
}

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos()
    }, [todos])

    async function fetchTodos() {
        try {
            const todoData = await API.graphql(graphqlOperation(listTodos))
            const todos = todoData.data.listTodos.items
            setTodos(todos)
        } catch (err) { console.err('error fetching todos', err) }
    }
    
    return (
        <div>
            <h2>Dynlab To-Do's</h2>
            <TodoApplication todos={todos} />
        </div>
    );
}

export default Todos;