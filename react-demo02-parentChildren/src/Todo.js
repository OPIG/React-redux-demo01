import React , {Component} from 'react';
import TodoListItem from './TodoListItem'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state={
            placeholder:'Enter something',
            inputValue:'',
            listData:[]
        }
        this.InputChange = this.InputChange.bind(this)
        this.AddItem = this.AddItem.bind(this)
        this.DeleteItem = this.DeleteItem.bind(this)
    }
    render() { 
        return ( 
            <div>
                <input 
                    placeholder={this.state.placeholder}
                    value={this.state.inputValue}
                    onChange={this.InputChange} />
                <button
                    onClick={this.AddItem}
                >Add</button>

                <ul>
                    {
                        this.state.listData.map((item,index)=>{
                            return (
                                <TodoListItem
                                    key={item+index}
                                    index={index}
                                    content={item}
                                    HandleDelte={this.DeleteItem}
                                >
                                </TodoListItem>
                            )
                        })
                       
                    }
                </ul>
            </div>
         );
    }

    InputChange(e){
        console.log(e.target.value)
        this.setState({inputValue:e.target.value})
    }

    AddItem(){
        this.setState({
            listData:[...this.state.listData,this.state.inputValue],
            inputValue:''
        })
    }

    DeleteItem(index){
        const newListData=JSON.parse(JSON.stringify(this.state.listData))
        newListData.splice(index,1)
        this.setState({
            listData:newListData
        })
    }
}


 
export default Todo;