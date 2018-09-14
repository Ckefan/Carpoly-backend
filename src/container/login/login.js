import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import  axios  from 'axios'
import { Login, Register } from '../../redux/Auth.redux'
import { Form, Icon, Input, Button, Row, Col, message } from 'antd'
import './login.scss';

const FormItem = Form.Item;
@connect(
  state => state.auth,
  { Login, Register }
)
class login extends Component {
  constructor(props) {
    super(props)
    this.userImg = require("../../images/user.jpg")
    this.sendUser = this.sendUser.bind(this);
  }
  sendUser(e) {
    e.preventDefault();
    this.props.form.validateFields((err, value) => {
      if (!err) {
        this.$http.post('/api/verify/login/', {
          username: value.username,
          password: value.password
        }).then((re) => {
          let res = re.data;
          console.log(res)
          if (res.code === 1) {
            this.props.Login();
          } else if (res.code === -1) {
            message.warning(<span style={{ color: '#FAAD14' }}>{res.msg}</span>)
          }
        }).catch((err) => {
          message.error(<span style={{ color: 'red' }}>{this.$hint.MSG.connect_fail}</span>)
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const homeHtml = <Redirect to="/manager/home"></Redirect>
    const loginHtml = (
      <Row type="flex" justify="center" align="middle">
        <Col>
          <div className="login">
            {this.props.isAuth ? <Redirect to='/manager/home' /> : null}
            <div className="user">
              <div className="user-border">
                <img className="user-img" src={this.userImg} alt="头像" />
              </div>
            </div>
            <div className="loginbox">
              <Form onSubmit={this.sendUser} className="login-form">
                <FormItem>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请填写用户名！' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,0.25)' }} />} placeholder="Username" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请填写密码！' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,0.25)' }} />} type="password" placeholder="Password" />
                  )}
                </FormItem>
                <FormItem>
                  <Row type="flex" justify="space-between" align="top">
                    <Col>
                      <Button className="btn" htmlType="submit">登录</Button>
                    </Col>
                    <Col>
                      <Button className="btn" htmlType="submit" disabled={true} onClick={this.props.Register}>注册</Button>
                    </Col>
                  </Row>
                </FormItem>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    )
    return this.props.isAuth ? homeHtml : loginHtml;
  }
}
const formLogin = Form.create()(login);

export default formLogin