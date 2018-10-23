import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import home from './container/home/home'
import user_order from './container/user/order/order'
import user_message from './container/user/message/message'

import shop_discount from './container/shop/discount/discount'
import shop_entry from './container/shop/entry/entry'
import shop_issue from './container/shop/issue/issue'
import shop_sold_out from './container/shop/sold_out/sold_out'

import count_order from './container/count/order/order'
import count_user from './container/count/user/user'


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
		current: "home"
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
	render() {
		let img = require(`./images/wallpaper${this.props.num}.jpg`);
		document.body.style.backgroundImage = `url(${img})`;
		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider breakpoint="lg" collapsedWidth="0">
					<div className="logo">袋鼠健康后台</div>
					<Menu mode="inline" theme="dark" inlineCollapsed={false} onClick={this.handleClick} selectedKeys={[this.state.current]} >
						<Menu.Item key="home">
							<Icon type="home" />
							<span>主页</span>
						</Menu.Item>
						<SubMenu title={<span><Icon type="shop" theme="outlined" /><span>商品管理</span></span>}>
							<Menu.Item key="shop_entry">录入商品</Menu.Item>
							<Menu.Item key="shop_issue">发布商品</Menu.Item>
							<Menu.Item key="shop_sold_out">下架商品</Menu.Item>
							<Menu.Item key="shop_discount">商品优惠</Menu.Item>
						</SubMenu>
						<SubMenu title={<span><Icon type="appstore" /><span>用户中心</span></span>}>
							<Menu.Item key="user_order">用户订单</Menu.Item>
							<Menu.Item key="user_message">用户留言</Menu.Item>
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
					<Header className="head">
						123123
					</Header>
					<Content style={{ margin: '16px', background: '#fff', minHeight: 280 }}>
						<Switch>
							<Route path="/manager/home" component={home}></Route>
							<Route path="/manager/user_order" component={user_order}></Route>
							<Route path="/manager/user_message" component={user_message}></Route>
							<Route path="/manager/shop_discount" component={shop_discount}></Route>
							<Route path="/manager/shop_entry" component={shop_entry}></Route>
							<Route path="/manager/shop_issue" component={shop_issue}></Route>
							<Route path="/manager/shop_sold_out" component={shop_sold_out}></Route>
							<Route path="/manager/count_order" component={count_order}></Route>
							<Route path="/manager/count_user" component={count_user}></Route>

							<Redirect to="/manager/home"></Redirect>
						</Switch>
					</Content>
				</Layout>
			</Layout >
		);
	}
}


export default App;

