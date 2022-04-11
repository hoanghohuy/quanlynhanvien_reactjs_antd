import React, { Component } from "react";
import 'antd/dist/antd.css'
import {Table, Button} from 'antd';
  
const columns = [
  {title: 'Mã nhân viên',dataIndex: 'id'},
  {title: 'Tên nhân viên',dataIndex: 'name'},
  {title: 'Ngày sinh',dataIndex: 'dob'},
  { title: 'Chức vụ',dataIndex: 'chucvu'},
  { title: 'Giới tính',dataIndex: 'gender'},
  {title: 'Địa chỉ',dataIndex: 'address'},
  {title: 'Email',dataIndex: 'email'},
  {title: 'SĐT',dataIndex: 'phone'},
  {title: 'Trạng thái',dataIndex: 'status'},
];

class Nhanvien extends Component {
      
    
      state = {
        selectedRows:[],
        selectedRow:{
          id: '', key: '', name: '', dob: '', chucvu: '', gender: '',address: '', email: '', phone: '', status: ''},
          checkID: '',
      }

      onSelectedChange= (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        console.log(selectedRowKeys)
        this.setState({
          selectedRows: selectedRows||[],
          selectedRow:selectedRows[0]||{},
          checkID: selectedRowKeys
        })
      }

      render() {
      return (
        <>
        <Table 
        rowSelection={{
          type: 'checkbox',
          onChange:this.onSelectedChange}}
        columns={columns} 
        dataSource={this.props.nhanvien} />
        </>
        )
      }
}

export default Nhanvien;