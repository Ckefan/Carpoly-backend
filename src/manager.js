import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import home from './container/home/home'
import user from './container/user/user'
import total from './container/total/total'
import { Login } from './redux/Auth.redux'


const SubMenu = Menu.SubMenu;

@connect(
  state => ({ num: state.bg, isAuth: state.auth.isAuth }),
  { Login }
)
@withRouter
class App extends Component {
  state = {
    current: "mail",
  }
  componentDidMount() {
    this.props.Login();
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    })
    console.log(this.props.history)
    // this.props.history.push(`/manager/${e.key}`)
    this.props.history.push('/login')

  }
  render() {
    let img = require(`./images/wallpaper${this.props.num}.jpg`);
    document.body.style.backgroundImage = `url(${img})`;

    return (
      <div className="ark">
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="home">
            <Icon type="mail" />主页
          </Menu.Item>
          <Menu.Item key="user">
            <Icon type="appstore" />用户列表
          </Menu.Item>
          <SubMenu title={<span><Icon type="setting" />界面配置</span>}>
            <Menu.Item key="homeSet">首页配置</Menu.Item>
            <Menu.Item key="shopSet">商品详情配置</Menu.Item>
          </SubMenu>
          <Menu.Item key="total">
            数据统计
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/manager/home" component={home}></Route>
          <Route path="/manager/user" component={user}></Route>
          <Route path="/manager/total" component={total}></Route>
          <Redirect to="/manager/home"></Redirect>
        </Switch>
      </div>
    );
  }
}


export default App;

