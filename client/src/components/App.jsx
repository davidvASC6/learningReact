import React from 'react'
import TodoList from './TodoList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: [{ text: "wake up" }, { text: "stand" }],
            name: 'David Vasquez',
            age: 16,
            schoolGrads: { class1: "Algebra" },
            grocery: [{ text: "apple" }, { text: "orange" }],
            newTodo: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event) {
        this.setState({ newTodo: event.target.value })
    }

    onSubmit(event) {
        console.log(this.state.newTodo)
        let newArray = this.state.toDoList.slice()

        newArray.push({text: this.state.newTodo})
        this.setState({toDoList: newArray, newTodo: ""})
    }

    onDelete(event) {
        
    }
    render() {
        return (
            <div>
                <h1>Hello World !</h1>
                <div>{this.state.name}</div>
                <div>{this.state.toDoList.map(toDo =>
                    (
                        <div>{toDo.text}<button onClick={this.onDelete}>Delete</button></div>
                    )
                )
                }</div>
                <hr></hr>
                <div>{this.state.grocery.map(groceryItem =>
                    (
                        <div>{groceryItem.text}<button>Delete</button></div>
                    )
                )
                }</div>

                <input onChange={this.onChange} value={this.state.newTodo}name="newTodo"
                />
                <button onClick={this.onSubmit}>Submit</button>
                <TodoList/>
            </div>
        )

    }
}

export default App;