import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import home from './container/home/home'
import user from './container/user/user'
import total from './container/total/total'
import { Login } from './redux/Auth.redux'

const { Header, Sider, Content } = Layout;
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
		this.props.history.push(`/manager/${e.key}`)
	}
	render() {
		let img = require(`./images/wallpaper${this.props.num}.jpg`);
		document.body.style.backgroundImage = `url(${img})`;

		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo">Carpoly管理后台</div>
					<Menu mode="inline" theme="dark" inlineCollapsed={false} onClick={this.handleClick} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} selectedKeys={[this.state.current]} >
						<Menu.Item key="home">
							<Icon type="mail" />
							<span>主页</span>
						</Menu.Item>
						<Menu.Item title={<span><Icon type="appstore" />用户中心</span>}>
							<Menu.Item key="homeSet">用户订单</Menu.Item>
							<Menu.Item key="shopSet">用户留言</Menu.Item>
						</Menu.Item>
						<SubMenu title={<span><Icon type="setting" />商品管理</span>}>
							<Menu.Item key="homeSet">商品录入</Menu.Item>
							<Menu.Item key="homeSet">商品发布</Menu.Item>
							<Menu.Item key="shopSet">商品下架</Menu.Item>
							<Menu.Item key="shopSet">商品优惠</Menu.Item>
							<Menu.Item key="shopSet">商品分类</Menu.Item>
						</SubMenu>
						<Menu.Item title={<span><Icon type="bar-chart" />数据统计</span>}>
							<Menu.Item key="homeSet">订单统计</Menu.Item>
							<Menu.Item key="shopSet">商品统计</Menu.Item>
							<Menu.Item key="shopSet">用户统计</Menu.Item>
						</Menu.Item>
					</Menu>
				</Sider>

				<Layout className="main">
					<Header className="header">
						<Icon type="menu-unfold" />
					</Header>
					<Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
						<Switch>
							<Route path="/manager/home" component={home}></Route>
							<Route path="/manager/user" component={user}></Route>
							<Route path="/manager/total" component={total}></Route>
							<Redirect to="/manager/home"></Redirect>
						</Switch>
					</Content>
				</Layout>
			</Layout>
		);
	}
}


export default App;

