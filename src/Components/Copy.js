import React, { Component, useState } from 'react'
import 'antd/dist/antd.css'
import { Button, Modal, Select, notification, Card, Form, Input, DatePicker } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';
import 'react-toastify/dist/ReactToastify.css';
import {QuestionCircleOutlined} from '@ant-design/icons'

const { Option } = Select;
const layout = {
    labelCol: {span: 6},
    wrapperCol: {span: 16},
};

class Copy extends Component {

    state = {
        isModalVisible: false,
        activeTabKey1: 'tab1',
        nhanvien: {}
    }

    onTab1Change = (key) => {
        this.setState({
            activeTabKey1: key
        })
    };

    showEditModal = () => {
        if (this.props.selectedRows.length === 1) {
            this.setState({
                nhanvien: this.props.selectedRow,
                isModalVisible: true,
            });
        }
        else {
            if (this.props.selectedRows.length === 0) {
                toast.warning('Vui lòng chọn dòng dữ liệu để sửa!')
            }
            else {
                toast.warning('Vui lòng chỉ chọn một dòng dữ liệu!')
            }
        }
    };

    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
    };

    tabList = [
        {
            key: 'tab1',
            tab: 'Thông tin chung',
        },
        {
            key: 'tab2',
            tab: 'Thông tin tài khoản ngân hàng',
        },
    ];

    // Handle Input Change
    handleIDChange = (e) => {
        this.setState({
            nhanvien: {
                ...this.state.nhanvien,
                id: e.target.value
            }
        })
    }
    handleNameChange = (e) => {

        this.setState({
            nhanvien: {
                ...this.state.nhanvien,
                name: e.target.value
            }
        })

    }
    handleBirthdayChange = (e) => {
        this.setState({
            nhanvien: {
                ...this.state.nhanvien,
                dob: e.format('DD-MM-YYYY')
            }
        })
    }
    handleChucvuChange = (e) => {
        this.setState({
            nhanvien: {
                ...this.state.nhanvien,
                chucvu: e
            }
        })
    }
    handleGenderChange = (e) => {
        this.setState({
            nhanvien: {
                ...this.state.nhanvien,
                gender: e
            }
        })
    }
    handleAddressChange = (e) => {
        this.setState({
            nhanvien: {
                ...this.state.nhanvien,
                address: e.target.value
            }
        })
    }
    handleEmailChange = (e) => {
        this.setState({
            nhanvien: {
                ...this.state.nhanvien,
                email: e.target.value
            }
        })
    }

    handlePhoneChange = (e) => {
        this.setState({
            nhanvien: {
                ...this.state.nhanvien,
                phone: e.target.value
            }
        })
    }

    handleStatusChange = (e) => {
        this.setState({
            nhanvien: {
                ...this.state.nhanvien,
                status: e
            }
        })
    }
    // Handle Thêm Nhân Viên

    handleCopyModalOK = () => {

        if (!this.state.nhanvien.id || !this.state.nhanvien.name ) {
            toast.warning('Không được bỏ trống các trường bắt buộc!')
            return;
        }
        let newNhanvien = {
            id: this.state.nhanvien.id,
            key: this.state.nhanvien.id,
            name: this.state.nhanvien.name,
            dob: this.state.nhanvien.dob,
            chucvu: this.state.nhanvien.chucvu,
            gender: this.state.nhanvien.gender,
            address: this.state.nhanvien.address,
            email: this.state.nhanvien.email,
            phone: this.state.nhanvien.phone,
            status: this.state.nhanvien.status
        }
        this.setState({
            isModalVisible: false
        })
        console.log("new nhan vien",newNhanvien)
        this.props.AddData(newNhanvien)
        this.setState({
            nhanvien: {}
        })
}



    render() {
        return (
            <>
                <Button style={{ marginRight: "10px" }} type="primary" onClick={this.showEditModal} size='large'>Sao chép</Button>
                <Modal title="Thêm nhân viên mới" visible={this.state.isModalVisible} onOk={this.handleCopyModalOK} 
                onCancel={this.handleCancel} width={1200}>
                <Card style={{ width: '100%' }} tabList={this.tabList} activeTabKey={this.activeTabKey1} >
                        <Form {...layout} name="nest-messages" style={{ display: 'flex', width: "100%", flexWrap: "wrap" }} >
                            <Form.Item style={{ width: '50%', float: 'left' }}
                                name='id'
                                key='id'
                                label="Mã nhân viên"
                                rules={[{ required: true }]}
                                tooltip={{ title: 'Mã nhân viên bắt buộc nhập!', icon: <QuestionCircleOutlined /> }} >
                                <Input required defaultValue='' size="large" onChange={this.handleIDChange} />
                            </Form.Item>

                            <Form.Item style={{ width: '50%', float: 'left' }}
                                name='name'
                                label="Tên nhân viên"
                                rules={[{ required: true }]}
                                tooltip={{ title: 'Tên nhân viên bắt buộc nhập!', icon: <QuestionCircleOutlined /> }} >
                                <Input required size="large" onChange={this.handleNameChange} />
                            </Form.Item>

                            <Form.Item style={{ width: '50%' }}
                                name="dob"
                                label="Ngày sinh">
                                <DatePicker format={'DD/MM/YYYY'}
                                defaultValue={moment(this.props.selectedRow.dob, 'DD-MM-YYYY')} size="large" style={{ width: '100%' }} onChange={this.handleBirthdayChange} />
                            </Form.Item>

                            <Form.Item style={{ width: '50%' }}
                                name='chucvu' label="Chức vụ">
                                <Select size="large" style={{ width: '100%' }} defaultValue={this.props.selectedRow.chucvu} onChange={this.handleChucvuChange}>
                                    <Option value="Nhân viên kho">Nhân viên kho</Option>
                                    <Option value="Bảo vệ">Bảo vệ</Option>
                                    <Option value="Quản lý chi nhánh">Quản lý chi nhánh</Option>
                                    <Option value="Nhân viên thu ngân">Nhân viên thu ngân</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item style={{ width: '50%' }}
                                name='gender' label="Giới tính">
                                <Select size="large" style={{ width: '100%' }} defaultValue={this.props.selectedRow.gender} onChange={this.handleGenderChange} >
                                    <Option value="Nam">Nam</Option>
                                    <Option value="Nữ">Nữ</Option>
                                    <Option value="Khác">Khác</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item style={{ width: '50%' }} name='address' label="Địa chỉ">
                                <Input size="large" onChange={this.handleAddressChange} defaultValue={this.props.selectedRow.address} />
                            </Form.Item>

                            <Form.Item style={{ width: '50%' }} name='email' label='Email' rules={[{ type: 'email' }]}>
                                <Input size="large" onChange={this.handleEmailChange} />
                            </Form.Item>

                            <Form.Item style={{ width: '50%' }}
                                name='phone'
                                label="Số điện thoại"
                            >
                                <Input size="large" style={{ width: '100%' }} />
                            </Form.Item>

                            <Form.Item style={{ width: '50%' }}
                                name='status' label="Trạng thái">
                                <Select size="large" style={{ width: '100%' }} onChange={this.handleStatusChange} defaultValue={this.props.selectedRow.status}>
                                    <Option value="Hoạt động">Hoạt động</Option>
                                    <Option value="Không hoạt động">Không hoạt động</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                    </Card>
                </Modal>
            </>
        )
    }
}

export default Copy;

