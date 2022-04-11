import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Button, Modal } from 'antd';
import 'react-toastify/dist/ReactToastify.css';

class Upload extends Component {
  handleCancel = () => {
    this.setState({
      isUploadModalVisible: false
    })
  }

  state = {
    isUploadModalVisible: false,
    isShowImportModal: false,
    file: '',
    importModal: true
  }

  render() {
    return (
      <>
        <Button style={{ marginRight: "10px" }} type="primary" onClick={this.showImportModal} size='large'>Nhập file</Button>
      </>
    )
  }
}

export default Upload;
