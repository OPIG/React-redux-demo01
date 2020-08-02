import React from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'

const TodoUI_noState =(props)=>{
    const paginationProps = {
        showSizeChanger: true,
        showQuickJumper: true,
        pageSize: 3,
        total: props.ListData.length,
      };
      
    const headerData = 'this is header'


    return (
        <div style={{marginTop:'10px'}}>
                <Input
                    placeholder={props.placeholder}
                    style={{width:'25%',marginRight:'10px'}}
                    value={props.inputValue}
                    onChange={props.changeInputValue}
                />
                <Button 
                    type="primary"
                    onClick={props.AddItem}
                    >
                    Click me
                </Button>
                
                <List
                    bordered
                    header={headerData}
                    dataSource={props.ListData}
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
                                     onClick={()=>{props.DeleteMe(index)}}
                                     // why i can't just using onClick = {this.props.DeleteMe(index)}????
                                >
                                    Delete Me{index}
                                </Button>
                            </List.Item>)
                    }
                />
            </div>
    )
}

export default TodoUI_noState