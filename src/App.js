import React, { Component } from "react";
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb, Divider, Table, Button, Modal, notification } from 'antd';
import Add from "./Components/Add";
import Copy from "./Components/Copy";
import Delete from "./Components/Delete";
import Detail from "./Components/Detail";
import Edit from "./Components/Edit";
import Search from "./Components/Search";
import Nhanvien from "./Components/Nhanvien";
const { Header, Content, Footer } = Layout;

const columns = [
  { title: 'Mã nhân viên', dataIndex: 'id' },
  { title: 'Tên nhân viên', dataIndex: 'name' },
  { title: 'Ngày sinh', dataIndex: 'dob' },
  { title: 'Chức vụ', dataIndex: 'chucvu' },
  { title: 'Giới tính', dataIndex: 'gender' },
  { title: 'Địa chỉ', dataIndex: 'address' },
  { title: 'Email', dataIndex: 'email' },
  { title: 'SĐT', dataIndex: 'phone' },
  { title: 'Trạng thái', dataIndex: 'status' },
];

class App extends Component {
  state = {
    nhanvien: [
      {
        id: '1',
        key: '1',
        name: 'Hồ Huy Hoàng',
        dob: '20-11-2000',
        chucvu: "Bảo vệ",
        gender: 'Nam',
        address: 'Thủ Đức, TP. Hồ Chí Minh',
        email: "hhhoang.h3@gmail.com",
        phone: "0394210763",
        status: "Hoạt động"
      },
      {
        id: '2',
        key: '2',
        name: 'Nguyễn Văn Tú',
        dob: '20-11-1999',
        chucvu: "Nhân viên kho",
        gender: 'Nam',
        address: '97 Man Thiện',
        email: "thanhtu@gmail.com",
        phone: "0909295905",
        status: "Hoạt động"
      },
      {
        id: '3',
        key: '3',
        name: 'Nguyễn Thị Hoa',
        dob: '20-11-2000',
        chucvu: "Quản lý chi nhánh",
        gender: 'Nữ',
        address: 'Hương Sơn, Hà Tĩnh',
        email: "hoahoa01@gmail.com",
        phone: "0999919121",
        status: "Hoạt động"
      }
    ],
    selectedRows: [],
    selectedRow: {
      id: '', key: '', name: '', dob: '', chucvu: '', gender: '', address: '', email: '', phone: '', status: ''
    },
    isDeleteModalVisible: false
  }

  onSelectedChange = (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    this.setState({
      selectedRows: selectedRows || [],
      selectedRow: selectedRows[0] || {}
    })
    this.render();
  }

  showDeleteModal = () => {
    if (this.state.selectedRows.length === 0) {
      notification.open({
        message: 'Vui lòng chọn dữ liệu muốn xóa!',
      })
    }
    else
    this.setState({
      isDeleteModalVisible: true
    })
  }

  handleCancel = () => {
    this.setState({
      isDeleteModalVisible: false
    })
  }

  // Xoá nhân viên
  DeleteData = () => {
    if (this.state.selectedRows.length === 0) {
      notification.open({
        message: 'Vui lòng chọn dữ liệu muốn xóa!',
      })
    }

    if (this.state.selectedRows.length === 1) {
      const id = this.state.selectedRow.id;
      console.log(id)
      const data = this.state.nhanvien.filter(nv => {
        return nv.id !== id
      });
      this.setState({
        nhanvien: data,
        isDeleteModalVisible: false,
        selectedRows: []
        
      });
      notification.open({
        message: 'Xóa dữ liệu thành công!',
      })

    }
    else {
      notification.open({
        message: 'Vui lòng chỉ chọn một dòng dữ liệu muốn xóa!',
      })
    }

  }
  // Thêm nhân viên
  AddData = (newNhanvien) => {
    this.setState({
      nhanvien: [...this.state.nhanvien, newNhanvien]
    })
  }

  render() {
    return (
      <Layout className="layout">
        <Header style={{ padding: "0 100px" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            <Menu.Item key={0}>Quản lý nhân viên</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 100px', height: '85vh' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Quản lý nhân viên</Breadcrumb.Item>
            <Breadcrumb.Item>Nhân viên</Breadcrumb.Item>
          </Breadcrumb>
          <Divider orientation="left"></Divider>
          <Search />
          <Add AddData={this.AddData} />
          <Copy />
          <Detail selectedRow={this.state.selectedRow} selectedRows={this.state.selectedRows} />
          <Edit />

          <Button style={{ marginRight: "10px" }} onClick={this.showDeleteModal} type="primary" size='large'>Xóa</Button>

          <Modal title="Xác nhận xóa" visible={this.state.isDeleteModalVisible} onOk={this.DeleteData} onCancel={this.handleCancel}>
            <p>Bạn có chắc chắc muốn xóa dữ liệu?</p>
          </Modal>

          <Table
            rowSelection={{
              type: 'checkbox',
              onChange: this.onSelectedChange
            }}
            columns={columns}
            dataSource={this.state.nhanvien} />

        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>

    );
  }
}

export default App;
