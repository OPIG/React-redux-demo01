import React ,{Component} from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'


class TodoUI extends Component {
    render() { 
        const paginationProps = {
            showSizeChanger: true,
            showQuickJumper: true,
            pageSize: 3,
            total: this.props.ListData.length,
          };
          
        const headerData = 'this is header'

        return ( 
            <div style={{marginTop:'10px'}}>
                <Input
                    placeholder={this.props.placeholder}
                    style={{width:'25%',marginRight:'10px'}}
                    value={this.props.inputValue}
                    onChange={this.props.changeInputValue}
                />
                <Button 
                    type="primary"
                    onClick={this.props.AddItem}
                    >
                    Click me
                </Button>
                
                <List
                    bordered
                    header={headerData}
                    dataSource={this.props.ListData}
                    style={{marginTop:'10px'}}
                    pagination={paginationProps.total>paginationProps.pageSize?paginationProps:{}}
                    renderItem={
                        (item,index)=>(
                            <List.Item
                                key={item+index}
                            >
                                {item}
                                <Button
                                    type="success"
                                     onClick={()=>{this.props.DeleteMe(index)}}
                                     // why i can't just using onClick = {this.props.DeleteMe(index)}????
                                >
                                    Delete Me{index}
                                </Button>
                            </List.Item>)
                    }
                />
            </div>
         );
    }
}
 
export default TodoUI;