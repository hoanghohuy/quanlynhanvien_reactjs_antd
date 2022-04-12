import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

const { TabPane } = Tabs;




class Test extends Component {
  render() {
    return (
        <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    )
  }
}

export default Test;
