import React, {useState} from 'react'
import 'antd/dist/antd.css'
import { Card, Form, Input } from 'antd';
import { Button, Modal, DatePicker, InputNumber, Select } from 'antd';

const { Option } = Select;
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
};

const Edit = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');

    const onTab1Change = key => {
        setActiveTabKey1(key);
    };
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
      }

    const tabList = [
        {
            key: 'tab1',
            tab: 'Thông tin chung',
        },
        {
            key: 'tab2',
            tab: 'Thông tin tài khoản ngân hàng',
        },
    ];

    const contentList = {
        tab1: <Form {...layout} name="nest-messages" style={{display: 'flex', width: "100%", flexWrap: "wrap"}} >
        <Form.Item style={{width: '50%', float: 'left'}}
            name={['id']}
            label="Mã nhân viên"
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Input size="large" disabled />
        </Form.Item>

        <Form.Item style={{width: '50%', float: 'left'}}
            name={['name']}
            label="Tên nhân viên"
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Input size="large" />
        </Form.Item>
        <Form.Item style={{width: '50%'}}
            name={['dob']}
            label="Ngày sinh">
            <DatePicker size="large" style={{ width: '100%' }} onChange={onChange} />
        </Form.Item>

        <Form.Item style={{width: '50%'}}
        name={['chucvu']} label="Chức vụ">
            <Select size="large" defaultValue="" style={{ width: '100%' }} onChange={handleChange}>
                <Option value="baove">Nhân viên kho</Option>
                <Option value="baove">Bảo vệ</Option>
                <Option value="quanly">Quản lý chi nhánh</Option>
                <Option value="thungan">Nhân viên thu ngân</Option>
            </Select>
        </Form.Item>

        <Form.Item style={{width: '50%'}}
        name={['gioitinh']} label="Giới tính">
            <Select size="large" defaultValue="" style={{ width: '100%' }} onChange={handleChange}>
                <Option value="male">Nam</Option>
                <Option value="female">Nữ</Option>
                <Option value="other">Khác</Option>
            </Select>
        </Form.Item>

        <Form.Item style={{width: '50%'}}
            name={['address']}
            label="Địa chỉ"
        >
            <Input size="large" />
        </Form.Item>

        <Form.Item style={{width: '50%'}}
            name={['email']}
            label="Email"
            rules={[
                {
                    type: 'email',
                },
            ]}
        >
            <Input size="large" />
        </Form.Item>

        <Form.Item style={{width: '50%'}}
            name={['phone']}
            label="Số điện thoại"
        >
            <InputNumber size="large" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item style={{width: '50%'}}
        name={['status']} label="Trạng thái">
            <Select size="large" defaultValue="active" style={{ width: '100%' }} onChange={handleChange}>
                <Option value="active">Hoạt động</Option>
                <Option value="inactive">Không hoạt động</Option>
            </Select>
        </Form.Item>
    </Form>,



        tab2: <p>content2</p>,
    };


    return (
        <>
            <Button style={{ marginRight: "10px" }} type="primary" onClick={showModal} size='large'>Chỉnh sửa</Button>

            <Modal title="Chỉnh sửa thông tin nhân viên" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>
                <Card
                    style={{ width: '100%' }}
                    tabList={tabList}
                    activeTabKey={activeTabKey1}
                    onTabChange={key => {
                        onTab1Change(key);
                    }}
                >
                    {contentList[activeTabKey1]}
                </Card>
            </Modal>
        </>
    )
}

export default Edit;
