import React, { Component } from 'react'
import { Layout, Button, Input, Modal } from 'antd'
import './entry.scss'
import { TreeClassify } from '../../../components/shop/tree_classify'

const { Header, Sider, Content } = Layout;
const Search = Input.Search;
const confirm = Modal.confirm;
const data = [
  {
    "title": "粉类",
    "key": "1",
    "children": [
      {
        "title": "粒子粉",
        "key": "1.1",
      },
      {
        "title": "石灰粉",
        "key": "1.2",
      }
    ]
  },
  {
    "title": "漆类",
    "key": "2",
    "children": [
      {
        "title": "环保漆",
        "key": "2.1",
      }
    ]
  }
]

export class order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data,
      search: '',//搜索框内容
      nodeKey: [],//选中节点key
    }
  }
  //子组件更新数据
  update = (data) => {
    this.setState({
      data
    })
  }
  onSelect = (e) => {
    this.setState({ nodeKey: e })
  }
  //赋值搜索框内容  or 搜索分类
  assginSearch = (data) => {
    const value = data.target.value;

    this.onChange(value);

    this.setState({
      search: value
    })
  }
  //添加分类
  addClassify = () => {
    this.state.data.push({
      title: this.state.search,
      key: this.state.data.length + 1 + '',
    })
    this.setState({ data: this.state.data })
  }
  detele = () => {
    let { data, nodeKey } = this.state;
    confirm({
      title: '温馨提示！',
      content: '删除此分类将不能恢复，是否确定删除？',
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        for (var i = 0; i < data.length; i++) {
          if (data[i].key === nodeKey[0]) {
            data.splice(i, 1);
            this.setState({ data, nodeKey: [] });
            return;
          }
          for (var i2 = 0; i2 < data[i].children.length; i2++) {
            if (data[i].children[i2].key === nodeKey[0]) {
              data[i].children.splice(i2, 1);
              this.setState({ data, nodeKey: [] });
              return;
            }
          }
        }
      }
    });
  }
  //获取子组件onChang 方法
  showTree = (onChange) => {
    this.onChange = onChange;
  }
  render() {
    const { data, search, nodeKey } = this.state;
    return (
      <div className="shop_entry">
        <Layout >
          <Header className="header" style={{ background: '#fff', padding: '0 10px' }}>录入商品</Header>
          <Header className="header" style={{ background: '#fff', padding: '0 10px' }}>
            <Search
              placeholder="搜索/添加分类"
              onChange={this.assginSearch}
              style={{ width: 180, marginRight: 10 }}
            />
            <Button type="primary" disabled={search === ''} style={{ marginRight: 10 }} onClick={this.addClassify}>添加分类</Button>
            <Button type="danger" disabled={nodeKey.length === 0} onClick={this.detele}>删除分类</Button>
          </Header>
          <Layout>
            <Sider style={{ background: '#fff' }}>
              <TreeClassify data={data} search={this.state.search} onChange={this.showTree} onSelect={this.onSelect} update={this.update} nodeKey={nodeKey}></TreeClassify>
            </Sider>
            <Content>

            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default order
