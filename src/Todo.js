import React, {Component} from 'react'

class Todo extends Component {
    constructor(props){
        super(props)
    }
    handleRemoveClick = (e)=>{
        var id = this.props.id
        this.props.removeTodo(id)
    }
    render(){
        return (
            <div className="todo">
                <div className="todo-body">
                <i className="far fa-times-circle todo-remove" onClick={this.handleRemoveClick}></i>
                <div className="todo-content">
                    {this.props.content}
                </div>
                <div className="todo-priority">
                    {this.props.priority}
                </div>
                </div>
            </div>
        )
    }
}

export default Todo