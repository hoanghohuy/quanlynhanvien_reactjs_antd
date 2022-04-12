import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Upload, Button, Modal } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import { UploadOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UploadFile extends Component {
  state = {
    isModalVisible: false,
    fileList: [],
    list: {
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange: this.handleChange,
      multiple: true,
    }
  };
  propsss = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: this.handleChange,
    multiple: true,
  };

  showUploadModal = () => {
    this.setState({
      isModalVisible: true
    })
  }

  handleChange = info => {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    this.setState({ fileList });
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false
    })
  }

  handleOK = () => {
    this.setState({
      isModalVisible: false,
    })
    toast.success("Upload file thành công!")
  }

  render() {
    return (
      <>
        <Button style={{ marginRight: "10px" }} type="primary" onClick={this.showUploadModal} size='large'>Nhập file</Button>
        <Modal title="Upload file" visible={this.state.isModalVisible} onOk={this.handleOK} onCancel={this.handleCancel} >
          <Upload {...this.state.propsss} fileList={this.state.fileList}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Modal>


      </>
    )
  }
}

export default UploadFile;
