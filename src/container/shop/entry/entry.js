import React, { Component } from 'react'
import { Layout } from 'antd'; 
import { TreeClassify } from '../../../components/shop/tree_classify'

const { Header, Footer, Sider, Content } = Layout;
const sData = [
  {
    "title": "1级",
    "key": "1",
    "children": [
      {
        "title": "1.1级",
        "key": "1.1",
      }
    ]
  },
  {
    "title": "2级",
    "key": "2",
    "children": [
      {
        "title": "2.1级",
        "key": "2.1",
      }
    ]
  }
]

export class order extends Component {
  state  = {
    sData
  }
  
  cClassify = (data)=>{
    this.setState({
      sData:data
    })
  }
  render() {
    return (
      <div>
        <Layout >
          <Header style={{ background: '#fff' }}>3632</Header>
          <Layout>
            <Sider style={{ background: '#fff' }}>
              <TreeClassify data={this.state.sData} classify={this.cClassify}></TreeClassify>
            </Sider>
            <Content>321</Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default order
