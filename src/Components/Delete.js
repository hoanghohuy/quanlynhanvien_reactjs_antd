import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Modal, Button } from 'antd';

 const Click = () => {
  console.log("ngu")
}
class Delete extends Component {
    
  render() {
    let {rowDetele,deleteAction} = this.props;
    return (
        <Button style={{marginRight: "10px"}} 
          type="primary" size='large'>Xóa</Button>
        
    )
  }
}

export default Delete;
