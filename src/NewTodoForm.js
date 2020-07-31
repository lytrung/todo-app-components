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
        console.log(e.target.value)
    }
    
    render(){
        return (
            <div className="todo new-todo">
                <form className="todo-body">
                    <div className="form-group">
                    <label htmlFor="content-input">Content</label>
                    <input type="text" className="form-control" id="content-input" onChange={this.handleContentInputChange}/>
                    </div>
    
                    <div className="form-group">
                    <label htmlFor="priority-input">Priority</label>
                    <input type="text" className="form-control" id="priority-input"/>
                    </div>
            
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm