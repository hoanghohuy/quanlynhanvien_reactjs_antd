import React from 'react'
import 'antd/dist/antd.css'
import { Button, Form, Input, Collapse } from 'antd';

const { Panel } = Collapse;
const layout = {
    labelCol: {
        span: 3,
    },
    wrapperCol: {
        span: 19,
    },
  };

const Search = () => {


    return (
        <>
            <Collapse defaultActiveKey={['0']}>
                <Panel header="Thông tin tìm kiếm" key="0">
                    <Form name="basic" {...layout} style={{ display: 'flex', width: '100%', flexWrap: 'wrap'}}
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                    >
                        <Form.Item label="Tên nhân viên" style={{ width: '50%', float: 'left' }}>
                            <Input size="large" />
                        </Form.Item>
                        <Form.Item style={{ width: '50%', float: 'left' }}
                            label="Tên nhân viên">
                            <Input size="large" />
                        </Form.Item >
                        <Form.Item label="Địa chỉ" style={{ width: '50%', float: 'left' }}>
                            <Input size="large" />
                        </Form.Item>
                        <Form.Item label="Trạng thái" style={{ width: '50%', float: 'left' }}>
                            <Input size="large" />
                        </Form.Item>
                    </Form>
                </Panel>
            </Collapse>
            <Button style={{ margin: "10px 10px 0 0" }} type="primary" size='large'>Tìm kiếm</Button>
        </>
    )
}

export default Search;
