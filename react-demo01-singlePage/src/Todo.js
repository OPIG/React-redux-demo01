import React , {Component} from 'react';

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
        this.keyDown=this.keyDown.bind(this)
    }
    render() { 
        return ( 
            <div>
                <input 
                    placeholder={this.state.placeholder}
                    value={this.state.inputValue}
                    onChange={this.InputChange} 
                    ref={inputItem=>this._inputItem=inputItem}
                    />
                <button
                    onClick={this.AddItem}
                    ref={btn=>this._btn=btn}
                >Add</button>

                <ul>
                    {
                        this.state.listData.map((item,index)=>{
                        return(
                                <li
                                    key={index+item}
                                    onClick ={()=>this.DeleteItem(index)}
                                >
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
         );
    }

    componentDidMount(){
        document.addEventListener('keydown',this.keyDown)
    }

    InputChange(e){
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

    keyDown(e){
        if(e.keyCode===13&&document.activeElement===this._inputItem){
            this._inputItem.value?this.AddItem():alert("input something")
        }
    }
}


 
export default Todo;