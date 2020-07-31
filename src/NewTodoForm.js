import React, {Component} from 'react'

class NewTodoForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            contentInput:'',
            priorityInput:''
        }
    }
    handleContentInputChange = (e)=>{
        this.setState({
            contentInput: e.target.value
        })
    }

    handlePriorityInputChange = (e)=>{
        this.setState({
            priorityInput: e.target.value
        })
    }

    handleAddButtonClick = (e)=>{
        e.preventDefault()
        var data = {
            content: this.state.contentInput,
            priority: this.state.priorityInput
        }
        this.props.addTodo(data)
        this.setState({
            contentInput:'',
            priorityInput:''
        })
    }
    
    render(){
        return (
            <div className="todo new-todo">
                <form className="todo-body">
                    <div className="form-group">
                    <label htmlFor="content-input">Content</label>
                    <input type="text" className="form-control" id="content-input" value={this.state.contentInput} onChange={this.handleContentInputChange}/>
                    </div>
    
                    <div className="form-group">
                    <label htmlFor="priority-input">Priority</label>
                    <input type="text" className="form-control" id="priority-input" value={this.state.priorityInput} onChange={this.handlePriorityInputChange}/>
                    </div>
            
                    <button type="submit" className="btn btn-primary" onClick={this.handleAddButtonClick}>Add</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm