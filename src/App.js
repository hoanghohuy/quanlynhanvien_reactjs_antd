import React, { Component } from "react";
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb, Divider, Table, Button, Modal, notification, Pagination } from 'antd';
import { UserOutlined, AndroidOutlined, AlertOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Add from "./Components/Add";
import Copy from "./Components/Copy";
import Delete from "./Components/Delete";
import Detail from "./Components/Detail";
import Edit from "./Components/Edit";
import Search from "./Components/Search";
import Upload from "./Components/Upload";
import Download from "./Components/Download";
const { Header, Content, Footer, Sider } = Layout;

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

    editNhanVien: {},

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
      toast.warning('Vui lòng chọn dữ liệu muốn xóa!')
      return;
    }
    if (this.state.selectedRows.length === 1) {
      this.setState({
        isDeleteModalVisible: true
      })
    }

    else {
    toast.warning('Vui lòng chỉ chọn một dòng dữ liệu!')
    }
  }

  handleCancel = () => {
    this.setState({
      isDeleteModalVisible: false
    })
  }

  // Xoá nhân viên
  DeleteData = () => {
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
      toast.success('Xóa dữ liệu thành công!')
  }
  // Thêm nhân viên
  AddData = (newNhanvien) => {
    console.log("truyenqua",newNhanvien)
    this.setState({
      nhanvien: [...this.state.nhanvien, newNhanvien],
      selectedRow: {},
      selectedRows: []
    })
    toast.success('Thêm dữ liệu thành công')
  }

  // Sửa nhân viên
  EditData = (newNhanvien) => {
    let {nhanvien} = this.state
    let isEmptyObj = Object.keys(newNhanvien).length === 0;
    let nhanvienCopy = [...nhanvien];
    let objIndex = nhanvienCopy.findIndex((item => item.id === newNhanvien.id ))
    nhanvienCopy[objIndex] = newNhanvien
    this.setState({
      nhanvien: nhanvienCopy
      })
    toast.success('Sửa dữ liệu thành công')
  }

  render() {
    return (
      <>
        <Layout>
          <Header style={{ padding: "0 200px" }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key={0}><AndroidOutlined />  Hệ thống</Menu.Item>
              <Menu.Item key={1}> <UserOutlined /> Nhân sự</Menu.Item>
              <Menu.Item key={2}> <AlertOutlined /> Nhà hàng</Menu.Item>
            </Menu>
          </Header>
        </Layout>
        <Layout>
          <Sider>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
              <Menu.Item key="4" icon={<UserOutlined />}>
                Nhân viên
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="layout">

            <Content style={{ padding: '0 100px', height: '86vh' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Quản lý nhân viên</Breadcrumb.Item>
                <Breadcrumb.Item>Nhân viên</Breadcrumb.Item>
              </Breadcrumb>
              <Search />
              <Add AddData={this.AddData} />
              <Copy selectedRow={this.state.selectedRow} selectedRows={this.state.selectedRows} AddData={this.AddData} />
              <Detail selectedRow={this.state.selectedRow} selectedRows={this.state.selectedRows} AddData = {this.AddData} />
              <Edit selectedRow={this.state.selectedRow} selectedRows={this.state.selectedRows} EditData={this.EditData} />

              <Button style={{ marginRight: "10px" }} onClick={this.showDeleteModal} type="primary" size='large'>Xóa</Button>

              <Modal title="Xác nhận xóa" visible={this.state.isDeleteModalVisible} onOk={this.DeleteData} onCancel={this.handleCancel}>
                <p>Bạn có chắc chắc muốn xóa dữ liệu?</p>
              </Modal>
              <Upload />
              <Download />
              <Table style={{ marginTop: '10px' }} rowSelection={{ type: 'checkbox', onChange: this.onSelectedChange }}
                columns={columns}
                bordered
                dataSource={this.state.nhanvien} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>

    );
  }
}

export default App;
