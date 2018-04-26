import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './style.scss';
import Complete from './components/Complete';
import CarouselComp from './components/carousel';
import CalendarComp from './components/calendar';
import TimelineComp from './components/timeline';

const {
  Header, Content, Footer, Sider,
} = Layout;

ReactDOM.render(
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="user" />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
      </Menu>

    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
        <Complete />
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <TimelineComp />
              <CalendarComp />
              <CarouselComp />
            </div>
          </Content>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
  , document.getElementById('container'),
);

//
// const App = () => {
//   return <div className="test">All the React are belong to us!</div>;
// // };
//
// ReactDOM.render(<App />, document.getElementById('main'));
