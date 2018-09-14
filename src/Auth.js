import React,{Component} from 'react'
import {Button} from 'antd';
import { connect } from 'react-redux'
import { Redirect} from 'react-router-dom'
import {login} from './Auth.redux'
// import {axios} from 'axios'

//两个reducers 每个reducers
@connect(
  state=>state.auth,
  {login}
)
class Auth extends Component {
  componentDidMount(){
    // axios.get('http:www.weather.com.cn/data/cityinfo/')
  }
  render() {
    return (
      <div>
        {this.props.isAuth?<Redirect to='/dashboard'/>:null}
        <h2>你没权限，需要登录才能看</h2>
        <Button type="primery" onClick={this.props.login}>登录</Button>
      </div>
    )
  }
}
export default Auth