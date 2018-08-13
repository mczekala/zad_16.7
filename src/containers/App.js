import React from "react";
import uuid from "uuid";
import style from "./App.css";
import {
  hot
} from "react-hot-loader";
import {
  Title
} from "../components/Title";
import {
  TodoList
} from "../components/TodoList";
import {
  TodoForm
} from "../components/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
          id: 1,
          text: "clean room"
        },
        {
          id: 2,
          text: "wash the dishes"
        },
        {
          id: 3,
          text: "feed my cat"
        }
      ],
      form: {
        text: ""
      }
    };
    this.removeTodo = this.removeTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({
      data
    });
  }
  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({
      data: remainder
    });
  }
  handleChange(event) {
    this.setState({
      form: {
        text: event.target.value
      }
    });
  }
  handleSubmit(event) {
    this.addTodo(this.state.form.text);
    this.setState({
      form: {
        text: ''
      }
    });
    event.preventDefault();
  }
  render() {
    return ( <
      div className = {
        style.TodoApp
      } >
      <
      TodoForm onChange = {
        this.handleChange
      }
      onSubmit = {
        this.handleSubmit
      }
      text = {
        this.state.form.text
      }
      />{" "} <
      Title data = {
        this.state.data
      }
      />{" "} <
      TodoList data = {
        this.state.data
      }
      remove = {
        this.removeTodo
      }
      />{" "} < /
      div >
    );
  }
}

export default App;