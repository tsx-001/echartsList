import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Button } from 'antd';
import './homeIndex.scss'
import {
  BarChartOutlined,
  LineChartOutlined,
  AreaChartOutlined,
  PieChartOutlined,
  DribbbleOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
const { SubMenu } = Menu;


class HomeIndex extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className='homeIndex'>
        <div className='menu'>

          <Menu
            mode="inline"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1" icon={<BarChartOutlined />}>
              柱状图
            </Menu.Item>
            <Menu.Item key="2" icon={<LineChartOutlined />}>
              线型图
            </Menu.Item>
            <Menu.Item key="3" icon={<AreaChartOutlined />}>
              柱线型图
            </Menu.Item>
            <Menu.Item key="4" icon={<PieChartOutlined />}>
              饼状图
            </Menu.Item>
            <Menu.Item key="5" icon={<DribbbleOutlined />}>
              地图
            </Menu.Item>
          </Menu>
        </div>
        <div className={this.state.collapsed ? 'content contentMax' : 'content'}>
          <div className='heard'>
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
          </div>

        </div>
      </div>

    );
  }
}

export default HomeIndex