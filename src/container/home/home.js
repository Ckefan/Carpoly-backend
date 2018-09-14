import React, { Component } from 'react'
import { message } from 'antd'
import './home.scss';

class home extends Component {
  componentDidMount() {
    this.$http.get('/api/manager/home').then(re => {
      let res = re.data;
      if (res.code === 1) {
        console.log(res.data);
      } else {
        message.warning(<span style={{ color: '#FAAD14' }}>{res.msg}</span>)
      }
    })
  }
  render() {
    return (
      <div>这是主页</div>
    )
  }
}


export default home