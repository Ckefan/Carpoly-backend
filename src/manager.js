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
		current: "home",
		collapsed: false,
	}

	componentDidMount() {
		this.props.Login();
	}
	handleClick = (e) => {
		this.setState({
			current: e.key,
		})
		console.log(e.key)
		this.props.history.push(`/manager/${e.key}`)
	}
	showList = () => {
		this.setState({
			collapsed: !this.props.collapsed,
		})
	}
	render() {
		let img = require(`./images/wallpaper${this.props.num}.jpg`);
		document.body.style.backgroundImage = `url(${img})`;
		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className={this.props.collapsed ? "mini" : "logo"} >Carpoly管理后台</div>
					<Menu mode="inline" theme="dark" inlineCollapsed={false} onClick={this.handleClick} selectedKeys={[this.state.current]} >
						<Menu.Item key="home">
							<Icon type="home" />
							<span>主页</span>
						</Menu.Item>
						<SubMenu title={<span><Icon type="appstore" /><span>用户中心</span></span>}>
							<Menu.Item key="user_order">用户订单</Menu.Item>
							<Menu.Item key="user_message">用户留言</Menu.Item>
						</SubMenu>
						<SubMenu title={<span><Icon type="setting" /><span>商品管理</span></span>}>
							<Menu.Item key="shop_entering">录入商品</Menu.Item>
							<Menu.Item key="shop_issue">发布商品</Menu.Item>
							<Menu.Item key="shop_sold_out">下架商品</Menu.Item>
							<Menu.Item key="shop_discount">商品优惠</Menu.Item>
						</SubMenu>
						<SubMenu title={<span><Icon type="bar-chart" /><span>数据统计</span></span>}>
							<Menu.Item key="count_order">订单统计</Menu.Item>
							<Menu.Item key="count_user">用户统计</Menu.Item>
							<Menu.Item key="count_user1">用户统计1</Menu.Item>
							<Menu.Item key="count_user2">用户统计2</Menu.Item>

						</SubMenu>
					</Menu>
				</Sider>

				<Layout className="main">
					<Header className="header">
						<Icon type="menu-unfold" onClick={this.showList} />
						123123
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

