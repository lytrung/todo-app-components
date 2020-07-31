import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos:[
        {
          id:1,
          content: 'Water plants',
          priority:'Urgent'
        },
        {
          id:2,
          content: 'Cook tea',
          priority:'Important'
        },
        {
          id:3,
          content: 'Watch youtube',
          priority:'Can wait'
        }
      ]
    }
  }
  render(){
    return (
      <div className="wrap">
        <div className="container">
          <div className="todos">

            {
              this.state.todos.map((todo)=>{

                var todoProps = {
                  key: todo.id,
                  ...todo
                }
                return (

                  <Todo {...todoProps} />

                )
              })

            }
            
       
            <NewTodoForm/>

          </div>
        </div>
      </div>
    )
  }

}

export default App;
