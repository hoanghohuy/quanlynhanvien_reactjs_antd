import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Button } from 'antd';

 class Download extends Component {
  render() {
    return (
        <Button style={{ marginRight: "10px" }} type="primary" onClick={this.showDetailModal} size='large'>Tải dữ liệu về (.csv)</Button>
    )
  }
}

export default Download;