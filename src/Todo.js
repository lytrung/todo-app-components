import React, {Component} from 'react'

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {

            isContentUpdating: false,
            isPriorityUpdating: false,
            contentInput : this.props.content,
            priorityInput : this.props.priority

        }
    }

    handleContentDoubleClick = (e)=>{
        this.setState({
            isContentUpdating: true
        })
    }

    handleContentInputBlur = (e)=>{
        //update content based on user input
        var id = this.props.id
        var data = {
            content:this.state.contentInput
        }
        this.props.updateTodo(id,data)

        //exit content updating mode
        this.setState({
            isContentUpdating: false
        })
    }

    handleContentInputChange = (e)=>{
        this.setState({
            contentInput: e.target.value
        })
    }

    handlePriorityDoubleClick = (e)=>{
        this.setState({
            isPriorityUpdating:true
        })
    }
    handlePriorityInputBlur = (e)=>{

        var id = this.props.id
        var data = {
            priority:this.state.priorityInput
        }
        this.props.updateTodo(id,data)

        this.setState({
            isPriorityUpdating:false
        })
    }
    handlePriorityInputChange = (e)=>{
        this.setState({
            priorityInput: e.target.value
        })
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
                <div className="todo-content" onDoubleClick={this.handleContentDoubleClick}>
                    {
                        this.state.isContentUpdating==true ? (
                            <input type="text" className="form-control" value={this.state.contentInput} onBlur={this.handleContentInputBlur} onChange={this.handleContentInputChange}/>
                        ) : this.props.content
                    }
                </div>
                <div className="todo-priority" onDoubleClick={this.handlePriorityDoubleClick}>
                    {
                        this.state.isPriorityUpdating==true ? (
                            <input type="text" class="form-control form-control-sm" value={this.state.priorityInput} onBlur={this.handlePriorityInputBlur} onChange={this.handlePriorityInputChange}/>
                        ) : this.props.priority
                    }
                </div>
                </div>
            </div>
        )
    }
}

export default Todo