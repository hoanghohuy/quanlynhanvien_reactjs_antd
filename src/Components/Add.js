import React, { Component} from 'react'
import 'antd/dist/antd.css'
import { Button, Modal, DatePicker, InputNumber, Select, Card, Form, Input, notification,Tabs } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QuestionCircleOutlined } from '@ant-design/icons'
const {TabPane} = Tabs;
const { Option } = Select;
const { TextArea } = Input;
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};

class Add extends Component {

    state = {
        isModalVisible: false,
        activeTabKey1: 'tab1',
        nhanvien: {
            id: '',
            key: '',
            name: '',
            dob: '',
            chucvu: '',
            gender: '',
            address: '',
            email: '',
            phone: '',
            status: ''
        }
    }

    onTab1Change = (key) => {
        this.setState({
            activeTabKey1: key
        })
    };
    showModal = () => {
        this.setState({
            isModalVisible: true
        })
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
        const nhanvien = this.state;
        nhanvien.id = e.target.value;
        this.setState({
            nhanvien
        })
    }
    handleNameChange = (e) => {
        const nhanvien = this.state;
        nhanvien.name = e.target.value;
        this.setState({
            nhanvien
        })
    }
    handleBirthdayChange = (e) => {
        const nhanvien = this.state;
        nhanvien.dob = e.format('DD-MM-YYYY');
        this.setState({
            nhanvien
        })
    }
    handleChucvuChange = (e) => {
        const nhanvien = this.state;
        nhanvien.chucvu = e;
        this.setState({
            nhanvien
        })
    }
    handleGenderChange = (e) => {
        const nhanvien = this.state;
        nhanvien.gender = e;
        this.setState({
            nhanvien
        })
    }
    handleAddressChange = (e) => {
        const nhanvien = this.state;
        nhanvien.address = e.target.value;
        this.setState({
            nhanvien
        })
    }
    handleEmailChange = (e) => {
        const nhanvien = this.state;
        nhanvien.email = e.target.value;
        this.setState({
            nhanvien
        })
    }

    handlePhoneChange = (e) => {
        const nhanvien = this.state;
        nhanvien.phone = e.target.value;
        this.setState({
            nhanvien
        })
    }

    handleStatusChange = (e) => {
        const nhanvien = this.state;
        nhanvien.status = e;
        this.setState({
            nhanvien
        })
    }
    // Handle Thêm Nhân Viên

    handleAddOnclickOK = () => {
        if (!this.state.nhanvien.id || !this.state.nhanvien.name) {
            toast.warning('Không được bỏ trống các trường bắt buộc!')
            return;
        }

        else {
            console.log("thêm nè")
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

            this.props.AddData(newNhanvien)
            this.setState({
                nhanvien: {}
            })
        };
    }



    render() {
        let { nhanvien } = this.state;
        return (
            <>
                <Button style={{ marginRight: "10px" }} type="primary" onClick={this.showModal} size='large'>Thêm mới</Button>
                <Modal title="Thêm mới nhân viên" visible={this.state.isModalVisible} onOk={this.handleAddOnclickOK} onCancel={this.handleCancel} width={1200}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Thêm mới nhân viên" key="1">
                        <Card style={{ width: '100%' }} >
                        <Form {...layout} name="nest-messages" style={{ display: 'flex', width: "100%", flexWrap: "wrap", textAlign: 'left' }} >
                            <Form.Item style={{ width: '50%', float: 'left' }}
                                name='id'
                                key='id'
                                label="Mã nhân viên"
                                rules={[{ required: true }]}
                                tooltip={{ title: 'Mã nhân viên bắt buộc nhập!', icon: <QuestionCircleOutlined /> }} >
                                <Input required size="large" onChange={this.handleIDChange} />
                            </Form.Item>

                            <Form.Item style={{ width: '50%', float: 'left' }}
                                name='name'
                                label="Tên nhân viên"
                                rules={[{ required: true }]}
                                tooltip={{ title: 'Tên nhân viên bắt buộc nhập!', icon: <QuestionCircleOutlined /> }} >
                                <Input required size="large" onChange={this.handleNameChange} />
                            </Form.Item>

                            <Form.Item style={{ width: '50%'}}
                                name="birthday"
                                label="Ngày sinh">
                                <DatePicker size="large" style={{ width: '100%', textAlign: 'left' }} onChange={this.handleBirthdayChange} />
                            </Form.Item>

                            <Form.Item style={{ width: '50%' }}
                                name='chucvu' label="Chức vụ">
                                <Select size="large" style={{ width: '100%' }} onChange={this.handleChucvuChange}>
                                    <Option value="Nhân viên kho">Nhân viên kho</Option>
                                    <Option value="Bảo vệ">Bảo vệ</Option>
                                    <Option value="Quản lý chi nhánh">Quản lý chi nhánh</Option>
                                    <Option value="Nhân viên thu ngân">Nhân viên thu ngân</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item style={{ width: '50%' }}
                                name='gender' label="Giới tính">
                                <Select size="large" style={{ width: '100%' }} onChange={this.handleGenderChange}>
                                    <Option value="Nam">Nam</Option>
                                    <Option value="Nữ">Nữ</Option>
                                    <Option value="Khác">Khác</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item style={{ width: '50%' }} name='address' label="Địa chỉ">
                                <Input size="large" onChange={this.handleAddressChange} />
                            </Form.Item>

                            <Form.Item style={{ width: '50%' }} name='email' label='Email' rules={[{ type: 'email' }]}>
                                <Input size="large" onChange={this.handleEmailChange} />
                            </Form.Item>

                            <Form.Item style={{ width: '50%' }} name='phone' label="Số điện thoại">
                                <Input type='number' size="large" style={{ width: '100%' }} onChange={this.handlePhoneChange} />
                            </Form.Item>

                            <Form.Item style={{ width: '50%' }}
                                name='status' label="Trạng thái">
                                <Select size="large" style={{ width: '100%' }} onChange={this.handleStatusChange}>
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
                                <Input size="large" onChange={this.handleAddressChange} />
                            </Form.Item>
                            <Form.Item style={{ width: '50%' }} name='address' label="Chi nhánh">
                                <Input size="large" onChange={this.handleAddressChange} />
                            </Form.Item>
                            <Form.Item style={{ width: '50%' }} name='address' label="Số tài khoản">
                                <Input size="large" onChange={this.handleAddressChange} />
                            </Form.Item>
                            <Form.Item style={{ width: '50%' }} name='address' label="Chi nhánh">
                                <Input size="large" onChange={this.handleAddressChange} />
                            </Form.Item>
                            <TextArea rows={4} />
                        </Form>
                    </Card>
                        </TabPane>
                    </Tabs>

                    
                </Modal>
            </>
        )
    }
}

export default Add;
