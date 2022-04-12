import React, { Component, useState } from 'react'
import 'antd/dist/antd.css'
import { Button, Modal, DatePicker, InputNumber, Select, Tabs, Card, Form, Input } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QuestionCircleOutlined } from '@ant-design/icons'
const { Option } = Select;
const { TabPane } = Tabs;
const { TextArea } = Input;
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
};

class Detail extends Component {

    state = {
        isModalVisible: false,
    }

    showDetailModal = () => {

        if (this.props.selectedRows.length === 1) {
            this.setState({
                isModalVisible: true,
            });
        }
        else {
            if (this.props.selectedRows.length === 0) {
                toast.warning('Vui lòng chọn dòng dữ liệu để xem!')
            }
            else {
                toast.warning('Vui lòng chỉ chọn một dòng dữ liệu!')
            }
        }
    };

    handleOK = () => {
        this.setState({
            isModalVisible: false
        })
    }

    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
    };
    render() {
        return (
            <>
                <Button style={{ marginRight: "10px" }} type="primary" onClick={this.showDetailModal} size='large'>Xem</Button>
                <Modal title="Xem thông tin nhân viên" visible={this.state.isModalVisible} onOk={this.handleOK} onCancel={this.handleCancel} width={1200}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Thêm mới nhân viên" key="1">
                            <Card>
                                <Form {...layout} name="nest-messages" style={{ display: 'flex', width: "100%", flexWrap: "wrap" }} >
                                    <Form.Item style={{ width: '50%', float: 'left' }}
                                        name='id'
                                        key='id'
                                        label="Mã nhân viên"
                                        rules={[{ required: true }]}
                                        tooltip={{ title: 'Mã nhân viên bắt buộc nhập!', icon: <QuestionCircleOutlined /> }} >
                                        <Input required size="large" defaultValue={this.props.selectedRow.id} disabled />
                                    </Form.Item>

                                    <Form.Item style={{ width: '50%', float: 'left' }}
                                        name='name'
                                        label="Tên nhân viên"
                                        rules={[{ required: true }]}
                                        tooltip={{ title: 'Tên nhân viên bắt buộc nhập!', icon: <QuestionCircleOutlined /> }} >
                                        <Input required size="large" disabled defaultValue={this.props.selectedRow.name} />
                                    </Form.Item>

                                    <Form.Item style={{ width: '50%' }}
                                        name="birthday"
                                        label="Ngày sinh">
                                        <Input defaultValue={this.props.selectedRow.dob} disabled size="large" style={{ width: '100%' }} />
                                    </Form.Item>

                                    <Form.Item style={{ width: '50%' }}
                                        name='chucvu' label="Chức vụ">
                                        <Select disabled size="large" style={{ width: '100%' }} defaultValue={this.props.selectedRow.chucvu}>
                                            <Option value="Nhân viên kho">Nhân viên kho</Option>
                                            <Option value="Bảo vệ">Bảo vệ</Option>
                                            <Option value="Quản lý chi nhánh">Quản lý chi nhánh</Option>
                                            <Option value="Nhân viên thu ngân">Nhân viên thu ngân</Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item style={{ width: '50%' }}
                                        name='gender' label="Giới tính">
                                        <Select disabled size="large" style={{ width: '100%' }} defaultValue={this.props.selectedRow.gender}>
                                            <Option value="Nam">Nam</Option>
                                            <Option value="Nữ">Nữ</Option>
                                            <Option value="Khác">Khác</Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item style={{ width: '50%' }} name='address' label="Địa chỉ">
                                        <Input disabled size="large" defaultValue={this.props.selectedRow.address} />
                                    </Form.Item>

                                    <Form.Item style={{ width: '50%' }} name='email' label='Email' rules={[{ type: 'email' }]}>
                                        <Input disabled size="large" defaultValue={this.props.selectedRow.email} />
                                    </Form.Item>

                                    <Form.Item style={{ width: '50%' }} name='phone' label="Số điện thoại">
                                        <Input type='number' disabled size="large" style={{ width: '100%' }} defaultValue={this.props.selectedRow.phone} />
                                    </Form.Item>

                                    <Form.Item style={{ width: '50%' }}
                                        name='status' label="Trạng thái">
                                        <Select disabled size="large" style={{ width: '100%' }} defaultValue={this.props.selectedRow.status}>
                                            <Option value="Hoạt động">Hoạt động</Option>
                                            <Option value="Không hoạt động">Không hoạt động</Option>
                                        </Select>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </TabPane>
                        <TabPane tab="Thông tin tài khoản ngân hàng" key="2">
                            <Card style={{ width: '100%' }} >
                                <Form {...layout} name="nest-messages" style={{ display: 'flex', width: "100%", flexWrap: "wrap" }} >
                                    <Form.Item style={{ width: '50%' }} name='address' label="Tên ngân hàng">
                                        <Input disabled size="large" onChange={this.handleAddressChange} />
                                    </Form.Item>
                                    <Form.Item style={{ width: '50%' }} name='address' label="Chi nhánh">
                                        <Input disabled size="large" onChange={this.handleAddressChange} />
                                    </Form.Item>
                                    <Form.Item style={{ width: '50%' }} name='address' label="Số tài khoản">
                                        <Input disabled size="large" onChange={this.handleAddressChange} />
                                    </Form.Item>
                                    <Form.Item style={{ width: '50%' }} name='address' label="Chi nhánh">
                                        <Input disabled size="large" onChange={this.handleAddressChange} />
                                    </Form.Item>
                                    <TextArea disabled rows={4} />
                                </Form>
                            </Card>
                        </TabPane>
                    </Tabs>



                </Modal>
            </>
        )
    }
}

export default Detail;
