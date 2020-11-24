import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import People from './components/People';

const { Header, Content, Sider } = Layout;

const App = () => {
  const [selected, setSelected] = useState([]);

  return (
    <Layout style={{height: '100%'}}>
      <Header className="header">
        <Link to="/" onClick={() => setSelected([])}>
          React + Redux
        </Link>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            selectedKeys={selected}
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="people">
              <Link to="/people" onClick={() => setSelected(['people'])}>
                Персонажи
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content className="main-content">
            <Switch>
              <Route path="/people" render={() => <People />} />
              <Route exact path="/" render={() => (
                <div className="centered">
                  <img 
                    style={{ width: '100%' }}
                    alt="Основное изображение" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2880px-Star_Wars_Logo.svg.png"
                  />
                </div>
              )} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
